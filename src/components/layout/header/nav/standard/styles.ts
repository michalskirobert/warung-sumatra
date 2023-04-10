import styled from "styled-components";

import { WEBSITE_BASE_COLOURS } from "@utils/constants";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

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

export const StyledButton = styled(Button)`
  height: 100%;
`;

export const StyledLink = styled(Link)<{ isUniqueLink?: boolean }>`
  background-color: ${({ isUniqueLink }) =>
    isUniqueLink ? WEBSITE_BASE_COLOURS.LIGHT_YELLOW : "unset"};
  font-weight: ${({ isUniqueLink }) => (isUniqueLink ? "800" : "initial")};
  color: ${({ isUniqueLink }) =>
    isUniqueLink ? WEBSITE_BASE_COLOURS.BLUE : "#fffff"};
  opacity: 0.8;
  transition: all 0.6s;

  &:hover {
    opacity: 0.6;
    color: ${WEBSITE_BASE_COLOURS.CONTRAST_YELLOW}!important;
    font-weight: bold;
  }
`;
