import React from "react";
import { Wrapper, Label, Input } from "../EventForm.styled";

import FormError from "../FormError/FormError";

const TimeSection = () => {
  return (
    <Wrapper>
      <Label htmlFor="time">Input time</Label>
      <Input type="time" placeholder="Input" name="time" />
      <FormError name="time" />
    </Wrapper>
  );
};

export default TimeSection;
