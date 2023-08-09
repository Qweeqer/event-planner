import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/events/eventsSelectors";

import BackButton from "../../components/BackButton/BackButton";
import CreateForm from "../../components/CreateForm/CreateForm";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

function CreatePage() {
  const isLoading = useSelector(selectIsLoading);
  const lang = useSelector((state) => state.events.lang);
  return (
    <>
      <BackButton>{lang.backButtonText}</BackButton>
      <Title>{lang.createPageTitle}</Title>
      <CreateForm />
      {isLoading && <Loader />}
    </>
  );
}

export default CreatePage;
