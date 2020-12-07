import client from "../src/apollo/client";
import { GET_MENUS } from "../src/apollo/queries/getMenus";
import Layout from "../src/components/layout";

const Index = ({ data }) => {
  // console.log({ data });

  return <Layout data={data}>content</Layout>;
};

export default Index;

export const getStaticProps = async () => {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: {
        header: data?.header ?? {},
        footer: data?.footer ?? {},
        menus: {
          headerMenus: data?.headerMenus?.edges ?? {},
          footerMenus: data?.footerMenus?.edges ?? {},
        },
      },
    },

    // Incremental static generation
    revalidate: 1,
  };
};
