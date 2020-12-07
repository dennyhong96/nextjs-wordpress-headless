import { isEmpty } from "lodash";

const Footer = ({ footer, footerMenus }) => {
  if (isEmpty(footerMenus)) {
    return null;
  }

  return <div>Footer</div>;
};

export default Footer;
