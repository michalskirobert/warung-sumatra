import styled from "styled-components";

import Select from "react-select";

export const Dictionary = styled(Select)<{ invalid: boolean }>`
  border: ${({ invalid }) => (!!invalid ? "1px solid red" : "unset")};
`;
