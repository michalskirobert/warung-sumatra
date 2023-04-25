import styled from "styled-components";
import { WEBSITE_BASE_COLOURS } from "@utils/constants";
import { Sizes } from "@utils/enums";

export const Choicer = styled.button<{ isActive: boolean; isMobile?: boolean }>`
  border: none;
  outline: none;
  background: none;
  color: ${({ isActive }) =>
    isActive
      ? WEBSITE_BASE_COLOURS.BASE_COLOUR
      : WEBSITE_BASE_COLOURS.SECONDARY_COLOUR};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  transition: 0.8s color;

  font-size: ${({ isMobile }) => (!!isMobile ? Sizes.standard : Sizes.small)};

  &:hover {
    color: ${WEBSITE_BASE_COLOURS.BASE_COLOUR};
  }
`;

export const Separator = styled.span`
  color: ${WEBSITE_BASE_COLOURS.BLACK_COLOUR};
`;

export const ChildrensContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  margin: 0;
  padding: 0;
`;
