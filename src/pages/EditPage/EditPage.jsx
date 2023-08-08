import React from "react";

import BackButton from "../../components/BackButton/BackButton";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/events/eventsSelectors";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import EditForm from "../../components/EditForm/EditForm";

function EditPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <BackButton>Back</BackButton>
      <Title>Edit event</Title>
      <EditForm />
      {isLoading && <Loader />}
    </>
  );
}

export default EditPage;
