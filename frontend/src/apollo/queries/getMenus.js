import { gql } from "@apollo/client";
import MENU_FRAGMENT from "../fragments/menus";

export const GET_MENUS = gql`
  query GetMenus {
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
  }
  ${MENU_FRAGMENT}
`;
