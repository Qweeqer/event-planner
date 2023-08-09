import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledTitle = styled.h2`
  color: ${(p) => p.theme.colors.text.title};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.title};
  font-size: ${(p) => p.theme.fontSizes.m};
  margin-bottom: 24px;
  text-align: left;

  @media ${device.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
