import { Sizes } from "@utils/enums";
import { CONSTANTS } from "@utils/index";
import { Image } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
  background-color: ${CONSTANTS.WEBSITE_BASE_COLOURS.BLACK_COLOUR};
`;

export const Caption = styled.p`
  display: inline;
  margin-right: 5px;
  color: ${CONSTANTS.WEBSITE_BASE_COLOURS.BASE_COLOUR};
`;

export const Title = styled.h4`
  color: ${CONSTANTS.WEBSITE_BASE_COLOURS.BASE_COLOUR};
  font-size: ${Sizes.standard};
  margin-top: 10px;
  font-weight: bold;
`;

export const Info = styled.p`
  display: inline;
  color: ${CONSTANTS.WEBSITE_BASE_COLOURS.BASE_COLOUR};
  font-size: ${Sizes.small};
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
  color: ${CONSTANTS.WEBSITE_BASE_COLOURS.BASE_COLOUR};
`;

export const Icons = styled.span`
  font-size: ${Sizes.small};
`;
