import { Image } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 10vh;
  max-height: 50vh;
  background-color: black;
  opacity: 0.7;
  position: fixed;
  bottom: 0;
  padding: 5px;
`;

export const Caption = styled.p`
  display: inline;
  margin-right: 5px;
  color: white;
`;

export const Title = styled.h4`
  color: white;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const Info = styled.p`
  display: inline;
  color: white;
  font-size: 1rem;
  margin: 0;
`;

export const Img = styled(Image)`
  width: 40px;
  display: inline;
  padding: 0;
  margin: 0;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Media = styled.a`
  margin-right: 5px;
`;

export const Icons = styled.span`
  font-size: 1.3rem;
`;
