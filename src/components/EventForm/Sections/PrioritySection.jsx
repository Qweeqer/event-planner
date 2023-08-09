import React from "react";
import { useSelector } from "react-redux";
import { Field } from "formik";

import InputSelect from "../../InputSelect/InputSelect";
import { Wrapper, Label } from "../EventForm.styled";
import { priorities } from "../../../helpers/variables";

import FormError from "../FormError/FormError";

const PrioritySection = () => {
  
  const lang = useSelector((state) => state.events.lang);
  const translatedPriorities = priorities.map((priority) => ({
    ...priority,
    label: lang[`priority${priority.value}`],
  }));
  return (
    <Wrapper>
      <Label htmlFor="priority">{lang.eventFormPriorityTitle}</Label>
      <Field name="priority">
        {({ field, form, meta }) => (
          <InputSelect
            field={field}
            form={form}
            meta={meta}
            label={"Priority"}
            options={translatedPriorities}
          />
        )}
      </Field>
      <FormError name="priority" />
    </Wrapper>
  );
};

export default PrioritySection;
