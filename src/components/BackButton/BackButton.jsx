import React from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, StyledIcon } from "./BackButton.styled";

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const lang = useSelector((state) => state.events.lang);

  const handleClick = () => {
    navigate(location?.state?.from ?? "/");
  };
  return (
    <Button type="button" onClick={handleClick}>
      <StyledIcon color="#7B61FF" />
      {lang.backButtonText}
    </Button>
  );
}

export default BackButton;
