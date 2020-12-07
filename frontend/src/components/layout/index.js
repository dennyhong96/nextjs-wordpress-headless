import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, data }) => {
  console.log(data);

  return (
    <div>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      {children}
      <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
    </div>
  );
};

export default Layout;
