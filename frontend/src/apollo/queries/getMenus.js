import { gql } from "@apollo/client";
import MENU_FRAGMENT from "../fragments/menus";

export const headerFooter = `
headerMenus: menuItems(where: { location: HCMS_MENU_HEADER, parentId: "0" }) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
footerMenus: menuItems(where: { location: HCMS_MENU_HEADER, parentId: "0" }) {
  edges {
    node {
      ...MenuFragment
    }
  }
}
footer: getFooter {
  socialLinks {
    iconName
    iconUrl
  }
  sidebarTwo
  sidebarOne
  copyrightText
}
header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}`;

export const GET_MENUS = gql`
  query GetMenus {
    ${headerFooter}
  }
  ${MENU_FRAGMENT}
`;
