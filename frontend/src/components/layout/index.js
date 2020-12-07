import { Fragment } from "react";
import Head from "next/head";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, data }) => {
  return (
    <Fragment>
      {/* Display favicon dynamically */}
      <Head>
        <link rel="shortcut icon" href={data?.header?.favicon} />
      </Head>
      <div>
        <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
        {children}
        <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
      </div>
    </Fragment>
  );
};

export default Layout;
