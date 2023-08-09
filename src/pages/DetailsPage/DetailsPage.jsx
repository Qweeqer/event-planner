import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { priorities } from "../../helpers/variables";
import BackButton from "../../components/BackButton/BackButton";
import DetailsBox from "../../components/DetailsBox/DetailsBox";
import Loader from "../../components/Loader/Loader";

import { TitleDetails, Wrap } from "./DetailsPage.styled.js";

function DetailsPage() {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const locationState = useLocation();
  const { eventId } = useParams();
  const lang = useSelector((state) => state.events.lang);
  


  const fetchEvent = useCallback(
    async (id) => {
      try {
        const { data } = await axios.get(id);
        setEventDetails(data);
        setIsLoading(false);
      } catch (error) {
        navigate("/");
      }
    },
    [navigate]
  );

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId, fetchEvent]);

  const {
    id,
    title,
    date,
    time,
    location,
    description,
    category,
    priority,
    picture,
  } = eventDetails;
  const priorityItem = priorities.find((item) => item.value === priority) ?? {};
  const valueName = priorityItem.valueName;
  const translatedPriority = lang[`priority${valueName}`];
  const translatedCategory = lang[`category${category}`];
  return (
    <div>
      <BackButton />
      {isLoading && <Loader />}
      {!isLoading && (
        <Wrap>
          <TitleDetails>{title}</TitleDetails>
          <DetailsBox
            id={id}
            title={title}
            date={date}
            time={time}
            location={location}
            description={description}
            category={translatedCategory}
            priority={priority}
            priorityName={translatedPriority}
            picture={picture}
            locationState={locationState}
          />
        </Wrap>
      )}
    </div>
  );
}

export default DetailsPage;
