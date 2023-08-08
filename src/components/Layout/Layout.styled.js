import styled from "styled-components";
import { device } from "../../utils/device";
import bg from "../../assets/images/backgroundImage.svg";

export const StyledMain = styled.main`
  background-image: url(${bg});

  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 40px 0 100px;

  @media ${device.desktop} {
    padding: 60px 0;
  }
`;
