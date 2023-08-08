import styled from "styled-components";

import { device } from "../../utils/device";

export const List = styled.ul`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 24px;
  }
`;
export const Item = styled.li`
  @media ${device.phabletAndMobileMax} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
