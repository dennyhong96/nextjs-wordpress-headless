import Head from "next/head";
import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, data }) => {
  console.log(data);

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
