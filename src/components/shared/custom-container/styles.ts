import { Container } from "reactstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)<{
  marginTop?: `${number}px`;
  marginBottom?: `${number}px`;
}>`
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;
  margin-top: ${({ marginTop }) => marginTop || "10rem"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
`;

export const Title = styled.h1<{ textAlign?: "center" | "left" | "right" }>`
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;
