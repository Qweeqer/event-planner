import React from "react";
import { useSelector } from "react-redux";

import { Wrapper, Label, Input } from "../EventForm.styled";

import FormError from "../FormError/FormError";

const TimeSection = () => {
  
  const lang = useSelector((state) => state.events.lang);
  return (
    <Wrapper>
      <Label htmlFor="time">{lang.eventFormTimeTitle}</Label>
      <Input type="time" placeholder={lang.eventFormTimeTitle} name="time" />
      <FormError name="time" />
    </Wrapper>
  );
};

export default TimeSection;
