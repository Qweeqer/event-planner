import styled from "styled-components";
import { Link } from "react-router-dom";
import { Plus } from "react-swm-icon-pack";
import { device } from "../../utils/device";

export const LinkButton = styled(Link)`
  display: flex;
  padding: 16px;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.accent};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.s};

  transition: background-color ${(p) => p.theme.animation.cubic};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media ${device.tablet} {
    padding: 16px 12px;

    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const StyledIcon = styled(Plus)`
  width: 24px;
  height: 24px;
`;
