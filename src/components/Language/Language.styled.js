import styled from "styled-components";

export const Wrap = styled.select`
  display: flex;
  padding: 12px 8px 12px 12px;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.white};
  border: none;
  box-shadow: ${(p) => p.theme.boxShadow.box};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.sort};
  color: ${(p) => p.theme.colors.text.title};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
