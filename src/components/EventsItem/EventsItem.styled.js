import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 100%;
  min-height: 480px;
  max-height:350px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.boxShadow.box};
  border-radius: ${(p) => p.theme.radii.lg};
  overflow: hidden;
  position: relative;
  display: block;
`;

export const ImgWrap = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 336px;
  position: relative;

  transition: height ${(p) => p.theme.animation.cubic};

  ${Card}:hover &, ${Card}:focus & {
    height: 300px;
  }
  }
`;

export const DateText = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.colors.text.accent};
  background-color: rgba(255, 255, 255, 0.8);
  line-height: 1.77;
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Description = styled.div`
  padding: 16px;
  padding-bottom: 24px;
  text-align: left;
  overflow: hidden; 
  max-height: 100px; 
  transition: padding-bottom ${(p) => p.theme.animation.cubic};

  ${Card}:hover &, ${Card}:focus & {
    padding-bottom: 76px;
  }
`;

export const Title = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.title};
  color: ${(p) => p.theme.colors.text.cardTitle};
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.text};
  overflow: hidden; 
  text-overflow: ellipsis; 
`;
export const Labels = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.text};
`;
export const Category = styled.p`
  color: ${(p) => p.theme.colors.text.accent};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  padding: 8px 12px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.md};
`;
export const Priority = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  padding: 8px 12px;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => {
    if (p.$priority === "3") {
      return p.theme.colors.text.high;
    } else if (p.$priority === "2") {
      return p.theme.colors.text.medium;
    } else {
      return p.theme.colors.text.low;
    }
  }};
  border-radius: ${(p) => p.theme.radii.md};
`;

export const ItemLink = styled(Link)`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: inline-block;
  padding: 10px 24px;
  border-radius: ${(p) => p.theme.radii.md};
  background-color: ${(p) => p.theme.colors.accent};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  color: ${(p) => p.theme.colors.white};
  transition: background-color ${(p) => p.theme.animation.cubic},
    opacity ${(p) => p.theme.animation.cubic},
    transform ${(p) => p.theme.animation.cubic};
  opacity: 0;
  transform: scale(0);

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }

  ${Card}:hover &, ${Card}:focus  & {
    opacity: 1;
    transform: scale(1);
  }
`;
