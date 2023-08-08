import React from "react";
import { Wrapper, Label, Textarea } from "../EventForm.styled";
import FormError from "../FormError/FormError";

function DescriptionSection() {
  return (
    <Wrapper>
      <Label htmlFor="description">Description</Label>
      <Textarea placeholder="Input" component="textarea" name="description" />
      <FormError name="description" />
    </Wrapper>
  );
}

export default DescriptionSection;
