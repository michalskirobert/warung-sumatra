import styled from "styled-components";
import { Label } from "reactstrap";

export const RequiredMark = styled(Label)<{ isRequired: boolean }>`
  display: ${({ isRequired }) => (!!isRequired ? "inline" : "none")};
  color: #dc3545;
  &::after {
    content: "*";
  }
`;
