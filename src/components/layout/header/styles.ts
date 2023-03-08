import styled from "styled-components";
import { Button, Image, Navbar } from "react-bootstrap";

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

export const StyledButton = styled(Button)``;
