import styled from "styled-components";
import { Search } from "react-swm-icon-pack";
import { device } from "../../utils/device";

export const InputWrap = styled.div`
  position: relative;
  margin: 0 auto;

  @media ${device.tabletMax} {
    width: 368px;
  }

  @media ${device.desktop} {
    width: 410px;
  }
`;

export const Input = styled.input`
  width: 100%;

  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.boxShadow.box};
  outline: none;
  border: none;
  padding: 14px 12px 14px 48px;
  color: ${(p) => p.theme.colors.text.accent};

  font-family: ${(p) => p.theme.fonts.body};

  &::placeholder {
    color: ${(p) => p.theme.colors.text.placeholder};
    font-weight: ${(p) => p.theme.fontWeights.light};
    font-family: ${(p) => p.theme.fonts.body};
  }
`;

export const StyledIcon = styled(Search)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
