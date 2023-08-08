import styled from "styled-components";
import { device } from "../../utils/device";
import { ArrowLeft } from "react-swm-icon-pack";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.text.accent};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-family: inherit;
  margin-bottom: 25px;

  @media ${device.desktop} {
    margin-bottom: 18px;
  }
`;

export const StyledIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
`;
