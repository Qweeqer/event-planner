import styled from "styled-components";
import { ChevronSmallDown, ChevronSmallUp } from "react-swm-icon-pack";

export const Wrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const WrapInput = styled.div`
  position: relative;
`;

export const StyledIconDown = styled(ChevronSmallDown)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const StyledIconUp = styled(ChevronSmallUp)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  height: 56px;
  outline: none;
  border-radius: ${(p) => p.theme.radii.md};
  border: ${(p) => `${p.theme.borders.thin} ${p.theme.colors.form.border}`};
  border-color: ${(p) => p.$error && p.theme.colors.form.error};
  color: ${(p) => p.theme.colors.form.input};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  /* line-height: ${(p) => p.theme.lineHeights.formInput}; */

  &:focus {
    border-color: ${(p) => p.theme.colors.accent};
  }
`;

export const Text = styled.p`
  opacity: ${(p) => !p.$select && "0.5"};
`;

export const Popup = styled.div`
  margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  padding: 20px;
  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.white};
  border: none;
  box-shadow: ${(p) => p.theme.boxShadow.box};
  z-index: 2;
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: flex-end;
`;

export const BtnCancel = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.sm};
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.text.accent};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.btn};
  font-family: inherit;

  transition: border-color ${(p) => p.theme.animation.cubic},
    color ${(p) => p.theme.animation.cubic};

  &:hover {
    border-color: ${(p) => p.theme.colors.hover};
    color: ${(p) => p.theme.colors.hover};
  }
`;

export const BtnChoose = styled.button`
  padding: 8px 16px;
  border: ${(p) => `${p.theme.borders.thin} ${p.theme.colors.accent}`};
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii.sm};
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.btn};
  font-family: inherit;
  transition: background-color ${(p) => p.theme.animation.cubic};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
