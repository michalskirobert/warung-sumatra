import styled from "styled-components";

import warung from "@assets/images/utils/header/warung.jpg";
import { CONSTANTS } from "@utils/index";

export const PictureContainer = styled.section`
  max-width: 100vw;
  min-height: calc(100vh - 50px);
  background: url(${warung}) no-repeat center;
  background-size: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;
