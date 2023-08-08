import React from "react";
import { Wrapper, Label, Input } from "../EventForm.styled";
import FormError from "../FormError/FormError";

const LocationSection = () => {
  return (
    <Wrapper>
      <Label htmlFor="location">Location</Label>
      <Input placeholder="Input" name="location" />
      <FormError name="location" />
    </Wrapper>
  );
};

export default LocationSection;
