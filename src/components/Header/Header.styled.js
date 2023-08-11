import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../utils/device";

export const HeaderWrap = styled.header`
  padding: 32px 0 24px;
  border-bottom: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.accent};
  background-color: ${(p) => p.theme.colors.primaryBackground};

  @media ${device.tabletMax} {
    padding: 26px 0 18px;
  }

  @media ${device.desktop} {
    padding: 22px 0;
  }
`;

export const Logo = styled(Link)`
  color: ${(p) => p.theme.colors.text.accent};
  font-family: ${(p) => p.theme.fonts.logo};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.logo};

  transition: color ${(p) => p.theme.animation.cubic};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTabWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
