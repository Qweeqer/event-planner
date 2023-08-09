import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import EventForm from "../EventForm/EventForm";
import { addEvent } from "../../redux/events/eventsOperations";

function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector((state) => state.events.lang);

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
      btnText={lang.createFormBtnText}
    />
  );
}

export default CreateForm;
