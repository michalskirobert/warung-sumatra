import styled from "styled-components";

export const Choicer = styled.button<{ isActive: boolean }>`
  border: none;
  outline: none;
  background: none;
  color: ${({ isActive }) => (isActive ? "red" : "black")};
  font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
  transition: 0.5s color;

  &:hover {
    color: yellow;
  }
`;

export const Separator = styled.span`
  color: white;
`;

export const ChildrensContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;
