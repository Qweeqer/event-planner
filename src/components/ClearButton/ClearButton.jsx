import React from "react";
import { Button } from "./ClearButton.styled";
import { CrossSmall } from "react-swm-icon-pack";

function ClearButton({ onClick }) {
  return (
    <Button onClick={onClick} type="button">
      <CrossSmall color="#7B61FF" />
    </Button>
  );
}

export default ClearButton;
