import React from "react";
import { useSelector } from "react-redux";

import { Wrapper, Label, Input } from "../EventForm.styled";
import FormError from "../FormError/FormError";

const LocationSection = () => {
  
  const lang = useSelector((state) => state.events.lang);
  return (
    <Wrapper>
      <Label htmlFor="location">{lang.eventFormLocationTitle}</Label>
      <Input placeholder={lang.eventFormLocationTitle} name="location" />
      <FormError name="location" />
    </Wrapper>
  );
};

export default LocationSection;
