import styled from "styled-components";
import { Button, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BLACK,
  BLUE,
  CONTRAST_YELLOW,
  DARK_BLUE,
  LIGHT_YELLOW,
} from "@utils/constants";

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
    isUniqueLink ? LIGHT_YELLOW : "unset"};
  font-weight: ${({ isUniqueLink }) => (isUniqueLink ? "800" : "initial")};
  color: ${({ isUniqueLink }) => (isUniqueLink ? DARK_BLUE : "#fffff")};
  opacity: 0.8;
  transition: opacity 0.6s;

  &:hover {
    opacity: 1;
  }
`;
