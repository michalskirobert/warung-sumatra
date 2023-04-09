import styled from "styled-components";
import { WEBSITE_BASE_COLOURS } from "@utils/constants";

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 5px;

  transition: translate 0.8s;
`;

export const LinksContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${WEBSITE_BASE_COLOURS.LIGHT_YELLOW};
  width: 100vw;
  height: 100vh;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100vh)"};

  transition: all 1s;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    & li {
      text-decoration: none;
      list-style-type: none;
      margin: 15px;
      & a {
        color: ${WEBSITE_BASE_COLOURS.BLUE};
      }
    }
  }
`;
