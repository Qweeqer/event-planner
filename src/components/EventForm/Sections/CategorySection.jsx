import React from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";

import InputSelect from "../../InputSelect/InputSelect";
import { Wrapper, Label } from "../EventForm.styled";
import { categories } from "../../../helpers/variables";

import FormError from "../FormError/FormError";

const CategorySection = () => {
  
  const lang = useSelector((state) => state.events.lang);
  return (
    <Wrapper>
      <Label htmlFor="category">{lang.eventFormCategoryTitle}</Label>
      <Field name="category">
        {({ field, form, meta }) => (
          <InputSelect
            field={field}
            form={form}
            meta={meta}
            label={"Category"}
            options={categories}
          />
        )}
      </Field>
      <FormError name="category" />
    </Wrapper>
  );
};

export default CategorySection;
