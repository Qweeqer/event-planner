import React from "react";
import { CrossSmall } from "react-swm-icon-pack";

import { Button } from "./ClearButton.styled";

function ClearButton({ onClick }) {
  return (
    <Button onClick={onClick} type="button">
      <CrossSmall color="#7B61FF" />
    </Button>
  );
}

export default ClearButton;
