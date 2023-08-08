import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, StyledIcon } from "./BackButton.styled";

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location?.state?.from ?? "/");
  };
  return (
    <Button type="button" onClick={handleClick}>
      <StyledIcon color="#7B61FF" />
      Back
    </Button>
  );
}

export default BackButton;
