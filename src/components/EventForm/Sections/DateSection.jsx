import React from "react";
import { useSelector } from "react-redux";
import { Field } from "formik";

import InputDate from "../../InputDate/InputDate";
import { Wrapper, Label } from "../EventForm.styled";
import FormError from "../FormError/FormError";

const DateSection = () => {
  const lang = useSelector((state) => state.events.lang);
  return (
    <Wrapper>
      <Label htmlFor="date">{lang.eventFormDateTitle}</Label>
      <Field id="date" name="date">
        {({ field, form, meta }) => (
          <InputDate field={field} form={form} meta={meta} label={"Date"} />
        )}
      </Field>
      <FormError name="date" />
    </Wrapper>
  );
};

export default DateSection;
