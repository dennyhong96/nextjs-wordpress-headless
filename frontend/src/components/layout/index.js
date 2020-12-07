import Header from "./header";

const Layout = ({ children, data }) => {
  console.log(data);

  return (
    <div>
      <Header headerMenus={data?.menus?.headerMenus} />
      {children}
    </div>
  );
};

export default Layout;
