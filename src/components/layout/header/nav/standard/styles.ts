import styled from "styled-components";

import * as C from "@utils/constants";

const colors = {
  lightYellow: C.LIGHT_YELLOW,
  contrastYellow: C.CONTRAST_YELLOW,
  blue: C.BLUE,
  darkBlue: C.DARK_BLUE,
  Black: C.BLACK,
};

export const NavContainer = styled.nav`
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
        color: ${colors.lightYellow};
      }
    }

    & li:last-child {
      padding-right: 20px;
      margin-left: auto;
      & a {
        position: relative;
        top: -5px;
        color: ${colors.blue};
        padding: 5px;
      }
    }
  }
}
`;
