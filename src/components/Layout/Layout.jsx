import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Container from "../Container/Container.styled";
import { StyledMain } from "./Layout.styled";

function Layout() {
  const { state } = useNavigation();
  return (
    <>
      <div>
        <Header />
        <StyledMain>
          <Container>
            {state === "loading" && (
              <div>
                <Loader />
              </div>
            )}
            <div>
              <div>
                <Outlet />
              </div>
            </div>
          </Container>
        </StyledMain>
      </div>
    </>
  );
}

export default Layout;
