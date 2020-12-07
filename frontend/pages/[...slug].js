import { isEmpty } from "lodash";
import { useRouter } from "next/router";

import client from "../src/apollo/client";
import { GET_PAGE, GET_PAGES_URI } from "../src/apollo/queries/pages/getPages";

const Pages = ({ data }) => {
  const router = useRouter();

  console.log({ router });
  console.log({ data });

  // Page (new pages that are not generated at build time) is not yet generated.
  // isFallback is true initially until getStaticProps() finishes running.
  if (router.isFallback) {
    return <div className="">Loading...</div>;
  }
  return <div>{router.query.slug.join("/")}</div>;
};

export default Pages;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const paths = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri)) {
        // slugs - array: Can have nested routes
        const slugs = page?.uri?.split("/").filter((pageSlug) => !!pageSlug);
        paths.push({ params: { slug: slugs } }); // key matches dynamic route
      }
    });

  return {
    paths, // Paths to generate at build time
    fallback: true, // Prevents 404 when accessing none generated pages (incremental static generation)
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug?.join("/"),
    },
  });

  console.log("GET PAGE DATA => ", data);

  return {
    props: {
      data: {
        header: data?.header ?? {},
        menus: {
          headerMenus: data?.headerMenus?.edges ?? [],
          footerMenus: data?.footerMenus?.edges ?? [],
        },
        footer: data?.footer ?? {},
        page: data?.page ?? {},
        path: params?.slug?.join("/"),
      },
    },
    revalidate: 1, // Re-built pages every 1 second (incremental static generation)
  };
};
