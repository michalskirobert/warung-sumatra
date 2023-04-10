import { Container } from "reactstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)`
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 100px;
  margin-bottom: 5rem;
`;

export const Title = styled.h1<{ textAlign?: "center" | "left" | "right" }>`
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;
