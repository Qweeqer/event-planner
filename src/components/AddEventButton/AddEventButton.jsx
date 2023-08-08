import React from "react";
import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import { LinkButton, StyledIcon } from "./AddEventButton.styled";

function AddEventButton() {
  const { isTablet } = useResponsiveBreakpoints();
  return (
    <LinkButton to="/create">
      <StyledIcon color="#ffffff" />
      {isTablet && "Add new event"}
    </LinkButton>
  );
}

export default AddEventButton;
