import React from "react";

import { useSelector } from "react-redux";

import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import { LinkButton, StyledIcon } from "./AddEventButton.styled";

function AddEventButton() {
  const { isTablet } = useResponsiveBreakpoints();
  const lang = useSelector((state) => state.events.lang);
  return (
    <LinkButton to="/create">
      <StyledIcon color="#ffffff" />
      {isTablet && <>{lang.addNewEvent}</>}
    </LinkButton>
  );
}

export default AddEventButton;
