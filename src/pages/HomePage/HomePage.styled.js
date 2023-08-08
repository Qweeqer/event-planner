import styled from "styled-components";
import { device } from "../../utils/device";

export const Wrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
  position: relative;
`;

export const MessageListEmpty = styled.p`
  text-align: center;
  padding-top: 120px;
  font-size: ${(p) => p.theme.fontSizes.m};
  color: ${(p) => p.theme.colors.text.accent};
  font-weight: ${(p) => p.theme.fontWeights.light};
  font-family: ${(p) => p.theme.fonts.body};
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 56px;
  height: 56px;

  @media ${device.tablet} {
    width: 129px;
    width: ${(p) => p.$sort && "202px"};
    width: ${(p) => p.$filter && "166px"};
  }
`;
