import { gql } from "@apollo/client";
import { headerFooter } from "../getMenus";
import MENU_FRAGMENT from "../../fragments/menus";

export const GET_PAGES_URI = gql`
  query GetPagesUri {
    pages: pages {
      nodes {
        id
        uri
      }
    }
  }
`;

export const GET_PAGE = gql`

  query GET_PAGE($uri: String!) {
    page: pageBy(uri: $uri) {
      id
      content
      title
      uri
      slug
    }
    ${headerFooter}
  }
  ${MENU_FRAGMENT}
`;
