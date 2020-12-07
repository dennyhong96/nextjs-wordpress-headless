import { gql } from "@apollo/client";

const MENU_FRAGMENT = gql`
  fragment MenuFragment on MenuItem {
    id
    url
    path
    label
  }
`;

export default MENU_FRAGMENT;
