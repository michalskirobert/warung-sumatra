import styled from "styled-components";
import { Image, Navbar } from "react-bootstrap";

export const Logo = styled(Navbar.Brand)`
  color: white !important;
`;

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Phone = styled.a`
  color: yellow;
`;

export const Info = styled.p`
  color: yellow;
`;

export const Img = styled(Image)`
  width: 60px;
  transition: opacity 0.5s;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
