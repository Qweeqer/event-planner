import React from "react";
import { Formik, Form } from "formik";
import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";

import { validationSchema } from "../../helpers/schemas";
import TimeSection from "./Sections/TimeSection";
import LocationSection from "./Sections/LocationSection";
import CategorySection from "./Sections/CategorySection";
import PictureSection from "./Sections/PictureSection";
import PrioritySection from "./Sections/PrioritySection";
import TitleSection from "./Sections/TitleSection";
import DescriptionSection from "./Sections/DescriptionSection";
import DateSection from "./Sections/DateSection";

import { StyledForm, Button } from "./EventForm.styled";

function EventForm({ onSubmit, initialValues, isLoading = false, btnText }) {
  const { isTabletMax, isMobile, isDesktop } = useResponsiveBreakpoints();

  return (
    !isLoading && (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} autoComplete="off">
            <StyledForm>
              {isMobile && (
                <>
                  <TitleSection />
                  <DescriptionSection />
                  <DateSection />
                  <TimeSection />
                  <LocationSection />
                  <CategorySection />
                  <PictureSection />
                  <PrioritySection />
                </>
              )}
              {isTabletMax && (
                <>
                  <div>
                    <TitleSection />
                    <DescriptionSection />
                    <DateSection />
                    <TimeSection />
                  </div>
                  <div>
                    <LocationSection />
                    <CategorySection />
                    <PictureSection />
                    <PrioritySection />
                  </div>
                </>
              )}

              {isDesktop && (
                <>
                  <div>
                    <TitleSection />
                    <DescriptionSection />
                  </div>
                  <div>
                    <DateSection />
                    <TimeSection />
                    <LocationSection />
                  </div>
                  <div>
                    <CategorySection />
                    <PictureSection />
                    <PrioritySection />
                  </div>
                </>
              )}

              <Button type="submit">{btnText}</Button>
            </StyledForm>
          </Form>
        )}
      </Formik>
    )
  );
}

export default EventForm;
