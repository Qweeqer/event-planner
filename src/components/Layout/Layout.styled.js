import styled, { keyframes } from "styled-components";
import { device } from "../../utils/device";
import bg from "../../assets/images/backgroundImage.svg";

const waveAnimation = keyframes`
  0% {
    background-position: center;
  }
  100% {
    background-position: center -50px;
  }
`;

export const StyledMain = styled.main`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100%;
  padding: 40px 0 100px;
  animation: ${waveAnimation} 3s linear 6 alternate;

  @media ${device.desktop} {
    padding: 60px 0;
  }
`;
