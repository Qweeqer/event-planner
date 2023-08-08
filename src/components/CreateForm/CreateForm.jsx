import React from "react";
import { useNavigate } from "react-router-dom";
import EventForm from "../EventForm/EventForm";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/eventsOperations";

function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    description: "",
    date: null,
    time: "",
    location: "",
    category: "",
    picture: "",
    priority: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addEvent(values));
    resetForm();
    navigate("/");
  };

  return (
    <EventForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      btnText="Add event"
    />
  );
}

export default CreateForm;
