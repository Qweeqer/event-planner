import React from "react";
import { useSelector } from "react-redux";

import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import Search from "../Search/Search";
import Language from "../Language/Language";

import Container from "../Container/Container.styled";

import {
  HeaderWrap,
  Logo,
  LogoWrap,
  HeaderWrapper,
  HeaderTabWrapper,
} from "./Header.styled";

function Header() {
  const { isTablet, isMobile } = useResponsiveBreakpoints();
  
  const lang = useSelector((state) => state.events.lang);

  return (
    <HeaderWrap>
      <Container>
        {isMobile && (
          <>
            <LogoWrap>
              <Logo to="/">{lang.eventPlannerLogoText}</Logo>
              <Language />
            </LogoWrap>

            <Search />
          </>
        )}
        {isTablet && (
          <HeaderWrapper>
            <Logo to={"/"}>{lang.eventPlannerLogoText}</Logo>
            <HeaderTabWrapper>
              <Search />
              <Language />
            </HeaderTabWrapper>
          </HeaderWrapper>
        )}
      </Container>
    </HeaderWrap>
  );
}

export default Header;
