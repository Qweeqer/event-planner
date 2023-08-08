import styled from "styled-components";
import { device } from "../../utils/device";

export const Wrap = styled.button`
  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.white};
  border: none;
  box-shadow: ${(p) => p.theme.boxShadow.box};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.text.title};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  position: absolute;
  z-index: 2;
  top: 0;
  z-index: ${(p) => p.$open && "3"};
  color: ${(p) => p.$open && p.theme.colors.text.accent};
  z-index: ${(p) => p.$open && "3"};
  color: ${(p) => p.$filter && p.theme.colors.text.accent};

  @media ${device.phabletMax} {
    right: ${(p) => !p.$open && "0"};
    left: ${(p) => p.$open && "0"};
  }
  @media ${device.tablet} {
    right: 0;
  }
`;

export const WrapIcon = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  color: inherit;
  gap: 4px;

  @media ${device.tablet} {
    align-items: center;
    gap: 16px;
  }
`;

export const List = styled.ul`
  overflow: hidden;
  width: 100%;
  min-width: 138px;
`;

export const Item = styled.li`
  width: 100%;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.colors.text.popup};
  color: ${(p) => p.$select && p.theme.colors.text.accent};

  &:first-child {
    border-top: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.popup};
  }

  &:last-child {
    padding-bottom: 8px;
  }

  &:not(:last-child) {
    border-bottom: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.popup};
  }
`;
