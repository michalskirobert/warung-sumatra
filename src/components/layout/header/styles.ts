import styled from "styled-components";
import { Button, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WEBSITE_BASE_COLOURS } from "@utils/constants";

export const Logo = styled(Navbar.Brand)`
  color: white !important;
`;

export const Img = styled(Image)`
  width: 60px;
  transition: opacity 0.5s;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
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
  }
`;
