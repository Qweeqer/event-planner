import React from "react";
import { Wrapper, Label, Input } from "../EventForm.styled";
import FormError from "../FormError/FormError";

function TitleSection() {
  return (
    <Wrapper>
      <Label htmlFor="title">Title</Label>
      <Input placeholder="Input" name="title" />
      <FormError name="title" />
    </Wrapper>
  );
}

export default TitleSection;
