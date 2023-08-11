import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";


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

const handleSubmit = async (values, { resetForm }) => {
  try {
    await dispatch(addEvent(values));
    Notiflix.Notify.success(lang.createFormSuccessText);

    resetForm();
    navigate("/");
  } catch (error) {
    Notiflix.Notify.failure(lang.createFormErrorText);

  }
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
