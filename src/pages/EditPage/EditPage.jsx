import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/events/eventsSelectors";

import BackButton from "../../components/BackButton/BackButton";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import EditForm from "../../components/EditForm/EditForm";

function EditPage() {
  const isLoading = useSelector(selectIsLoading);
const lang = useSelector((state) => state.events.lang);
  return (
    <>
      <BackButton>{lang.backButtonText}</BackButton>
      <Title>{lang.editPageTitle}</Title>
      <EditForm />
      {isLoading && <Loader />}
    </>
  );
}

export default EditPage;
