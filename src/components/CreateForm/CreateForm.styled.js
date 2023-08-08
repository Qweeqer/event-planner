import styled from "styled-components";
import { Field } from "formik";

import { device } from "../../utils/device";

export const StyledForm = styled.div`
  position: relative;
  padding: 40px 16px;
  text-align: left;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: ${(p) => p.theme.boxShadow.box};

  @media ${device.tablet} {
    padding: 40px 24px 136px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
  }
  @media ${device.desktop} {
    padding: 40px 40px 170px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Label = styled.label`
  color: ${(p) => p.theme.colors.form.label};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.formLabel};
  letter-spacing: ${(p) => p.theme.letterSpacing.l};
  margin-bottom: 8px;
  display: inline-block;
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 12px 16px;
  height: 56px;
  outline: none;
  border-radius: ${(p) => p.theme.radii.md};
  border: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.form.border};
  border-color: ${(p) => p.$error && p.theme.colors.form.error};
  color: ${(p) => p.theme.colors.form.input};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  line-height: ${(p) => p.theme.lineHeights.formInput};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${(p) => p.theme.colors.accent};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.form.input};
    font-family: inherit;
    line-height: ${(p) => p.theme.lineHeights.formInput};
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;

export const Textarea = styled(Input)`
  resize: none;
  min-height: 156px;
`;

export const ErrorText = styled.p`
  position: absolute;
  color: ${(p) => p.theme.colors.form.error};
  font-size: 12px;
  right: 19px;
  margin-top: 4px;
`;
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  min-width: 193px;
  padding: 16px 12px;
  border: none;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.accent};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: inherit;
  color: ${(p) => p.theme.colors.white};
  line-height: ${(p) => p.theme.lineHeights.title};
  transition: background-color ${(p) => p.theme.animation.cubic};

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media ${device.tablet} {
    position: absolute;
    right: 24px;
    bottom: 40px;
  }

  @media ${device.desktop} {
    right: 40px;
    bottom: 54px;
  }
`;

export const StyledWrap = styled.div``;
