import { Fragment } from "react";

import client from "../src/apollo/client";
import { GET_MENUS } from "../src/apollo/queries/getMenus";

export default function Index({ menus }) {
  console.warn({ menus });
  return (
    <Fragment>
      <div>Home</div>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges,
        footerMenus: data?.footerMenus?.edges,
      },
    },
  };
};
