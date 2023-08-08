import styled from "styled-components";
import { device } from "../../utils/device";
import { Link } from "react-router-dom";

export const Box = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: ${(p) => p.theme.boxShadow.box};
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: ${(p) => p.theme.radii.md};
  width: 100%;
  height: 168px;
  object-fit: cover;

  @media ${device.tablet} {
    height: 268px;
  }
`;

export const Wrap = styled.div`
  padding: 24px 16px 40px;

  @media ${device.tablet} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${device.desktop} {
    padding: 20px 40px 40px 10px;
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.text.cardText};
  line-height: ${(p) => p.theme.lineHeights.text};
  margin-bottom: 24px;
  text-align: left;

  @media ${device.desktop} {
    margin-bottom: 34px;
  }
`;

export const LabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;

  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const Label = styled.div`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  padding: 6px 12px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.md};
  box-shadow: ${(p) => p.theme.boxShadow.label};
  color: ${(p) => p.theme.colors.text.accent};

  color: ${(p) => {
    if (p.$priority === "3") {
      return p.theme.colors.text.high;
    } else if (p.$priority === "2") {
      return p.theme.colors.text.medium;
    } else if (p.$priority === "1") {
      return p.theme.colors.text.low;
    }
  }};
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  position: relative;
`;

export const EditBtn = styled(Link)`
  display: block;
  padding: 8px 14px;
  width: 108px;
  border: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.sm};
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.text.accent};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.btn};

  transition: border-color ${(p) => p.theme.animation.cubic},
    color ${(p) => p.theme.animation.cubic};

  &:hover {
    border-color: ${(p) => p.theme.colors.hover};
    color: ${(p) => p.theme.colors.hover};
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

export const DelBtn = styled.button`
  padding: 8px 14px;
  border: ${(p) => p.theme.borders.thin} ${(p) => p.theme.colors.accent};
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

export const Popup = styled.div`
  position: absolute;
  z-index: 1;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  bottom: -4px;
  right: -4px;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.boxShadow.box};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.sort};
  color: ${(p) => p.theme.colors.text.title};
`;
