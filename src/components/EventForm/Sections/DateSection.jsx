import React from "react";
import { Field } from "formik";
import InputDate from "../../InputDate/InputDate";
import { Wrapper, Label } from "../EventForm.styled";
import FormError from "../FormError/FormError";

function DateSection() {
  return (
    <Wrapper>
      <Label htmlFor="date">Input date</Label>
      <Field id="date" name="date">
        {({ field, form, meta }) => (
          <InputDate field={field} form={form} meta={meta} label={"Date"} />
        )}
      </Field>
      <FormError name="date" />
    </Wrapper>
  );
}

export default DateSection;
