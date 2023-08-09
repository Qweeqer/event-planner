import React from "react";
import { useSelector } from "react-redux";

import { Wrapper, Label, Textarea } from "../EventForm.styled";
import FormError from "../FormError/FormError";

function DescriptionSection() {
  const lang = useSelector((state) => state.events.lang);
  return (
    <Wrapper>
      <Label htmlFor="description">{lang.eventFormDescriptionTitle}</Label>
      <Textarea
        placeholder={lang.eventFormDescriptionTitle}
        component="textarea"
        name="description"
      />
      <FormError name="description" />
    </Wrapper>
  );
}

export default DescriptionSection;
