import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import EventForm from "../EventForm/EventForm";

function EditForm() {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { eventId } = useParams();

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
      await axios.put(`/${event.id}`, event);
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
      btnText="Save"
    />
  );
}

export default EditForm;
