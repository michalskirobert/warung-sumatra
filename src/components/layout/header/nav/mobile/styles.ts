import styled from "styled-components";
import { WEBSITE_BASE_COLOURS } from "@utils/constants";
import { Sizes } from "@utils/enums";

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 5px;
`;

export const LinksContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${WEBSITE_BASE_COLOURS.LIGHT_YELLOW};
  width: 100vw;
  height: 100vh;

  overflow: hidden;

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
      margin: 5px;
      & a {
        color: ${WEBSITE_BASE_COLOURS.BLUE};
        font-size: ${Sizes.medium};
      }
    }
  }
`;

export const LogoContainer = styled.li`
  margin: 0;
  text-align: center;
`;

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;
