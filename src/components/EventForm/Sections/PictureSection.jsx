import React from "react";
import { Wrapper, Label, Input } from "../EventForm.styled";
import FormError from "../FormError/FormError";

const PictureSection = () => {
  return (
    <Wrapper>
      <Label htmlFor="picture">Add picture</Label>
      <Input placeholder="Input" name="picture" />
      <FormError name="picture" />
    </Wrapper>
  );
};

export default PictureSection;
