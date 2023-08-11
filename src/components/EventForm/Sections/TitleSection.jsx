import React from "react";
import { useSelector } from "react-redux";

import { Wrapper, Label, Input } from "../EventForm.styled";
import FormError from "../FormError/FormError";

const TitleSection = () => {
  
  const lang = useSelector((state) => state.events.lang);

  return (
    <Wrapper>
      <Label htmlFor="title">{lang.eventFormTitleFields}</Label>
      <Input placeholder={lang.eventFormTitleFields} name="title" />
      <FormError name="title" />
    </Wrapper>
  );
}

export default TitleSection;
