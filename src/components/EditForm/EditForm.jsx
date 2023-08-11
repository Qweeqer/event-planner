import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { updateEvent } from "../../redux/events/eventsOperations";
import EventForm from "../EventForm/EventForm";

function EditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { eventId } = useParams();

  const lang = useSelector((state) => state.events.lang);

  const fetchEvent = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(id);
        setEventDetails(data);
      } catch (error) {
        navigate(location?.state?.from ?? "/");
      }

      setIsLoading(false);
    },
    [navigate, location]
  );

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId, fetchEvent]);

  const onSubmit = async (values, { resetForm }) => {
    const event = { ...values, id: eventDetails.id };
    try {
      await dispatch(updateEvent(event)); 
      resetForm();
    } catch (error) {
      navigate(location?.state?.from ?? "/");
    }

    navigate(location?.state?.from ?? "/");
  };

  return (
    <EventForm
      onSubmit={onSubmit}
      isLoading={isLoading}
      initialValues={eventDetails}
      btnText={lang.eventFormSaveBtnText}
    />
  );
}

export default EditForm;
