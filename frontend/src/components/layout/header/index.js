import { isEmpty } from "lodash";
import Nav from "./nav";

const Header = ({ headerMenus, header }) => {
  console.log(headerMenus);
  // If no menu, don't render anything
  if (isEmpty(headerMenus)) {
    return null;
  }

  return (
    <header>
      <Nav headerMenus={headerMenus} header={header} />
    </header>
  );
};

export default Header;
