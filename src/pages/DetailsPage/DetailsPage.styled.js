import styled from "styled-components";
import { device } from "../../utils/device";
import { StyledTitle } from "../../components/Title/Title.styled";

export const TitleDetails = styled(StyledTitle)`
  @media ${device.desktop} {
    margin-bottom: 14px;
  }
`;

export const Wrap = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    width: 628px;
  }
`;
