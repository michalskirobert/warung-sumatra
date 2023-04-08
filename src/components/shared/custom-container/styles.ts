import { Container } from "reactstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)`
  display: flex;
  position: relative;
  min-height: 100vh;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.h1<{ textAlign?: "center" | "left" | "right" }>`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;
