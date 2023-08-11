import React, { useState, useRef, forwardRef } from "react";
import { useSelector } from "react-redux";

import { Wrapper, Label, Input, Button } from "../EventForm.styled";
import FormError from "../FormError/FormError";
import useResponsiveBreakpoints from "../../../hooks/useResponsiveBreakpoints";

const PictureSection = forwardRef((props, ref) => {
  const { isTabletMax } = useResponsiveBreakpoints();

  const lang = useSelector((state) => state.events.lang);

  const selectButtonStyles = {
    position: isTabletMax ? "relative" : "static",
    marginTop: isTabletMax ? "15%" : "8%",
    marginLeft: isTabletMax ? "8%" : 0,
    backgroundColor: "grey", // only if backend not suport add files
  };

  return (
    <Wrapper>
      <Label htmlFor="picture">{lang.eventFormPictureTitle}</Label>
      <Input placeholder="Input" name="picture" />
      <FormError name="picture" />
      <Button
        type="button"
        style={selectButtonStyles}
        disabled // only if backend not suport add files
      >
        {lang.eventFormPictureBtnText}
      </Button>
    </Wrapper>
  );
});

export default PictureSection;
