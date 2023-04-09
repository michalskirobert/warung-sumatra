import styled from "styled-components";

import { WEBSITE_BASE_COLOURS } from "@utils/constants";

export const NavContainer = styled.nav`
display: flex;
margin-top: 2px;
width: 100%;

& ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    & li {
      text-decoration: none;
      list-style-type: none;
      margin: 15px;
      & a {
        color: ${WEBSITE_BASE_COLOURS.LIGHT_YELLOW};
      }
    }

    & li:last-child {
      padding-right: 20px;
      margin-left: auto;
      & a {
        position: relative;
        top: -5px;
        color: ${WEBSITE_BASE_COLOURS.BLUE};
        padding: 5px;
      }
    }
  }
}
`;

export const LanguageContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  transform: translateY(50%);
  margin-right: 30px;
`;
