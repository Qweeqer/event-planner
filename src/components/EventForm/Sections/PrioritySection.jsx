import React from "react";
import { Field } from "formik";
import InputSelect from "../../InputSelect/InputSelect";
import { Wrapper, Label } from "../EventForm.styled";
import { priorities } from "../../../helpers/variables";

import FormError from "../FormError/FormError";

const PrioritySection = () => {
  return (
    <Wrapper>
      <Label htmlFor="priority">Priority</Label>
      <Field name="priority">
        {({ field, form, meta }) => (
          <InputSelect
            field={field}
            form={form}
            meta={meta}
            label={"Priority"}
            options={priorities}
          />
        )}
      </Field>
      <FormError name="priority" />
    </Wrapper>
  );
};

export default PrioritySection;
