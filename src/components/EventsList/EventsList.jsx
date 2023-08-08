import React from "react";
import { useSelector } from "react-redux";

import { selectVisibleEvents } from "../../redux/events/eventsSelectors";

import EventsItem from "../EventsItem/EventsItem";
import { List, Item } from "./EventsList.styled";

import { findPriority } from "../../helpers/findPriority";

function EventsList({ locationState }) {
  const events = useSelector(selectVisibleEvents);

  return (
    <List>
      {events.map((event) => {
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
        } = event;
        const { value, valueName } = findPriority(priority);
        const path = `/events/${id}`;

        return (
          <Item key={id}>
            <EventsItem
              title={title}
              date={date}
              time={time}
              location={location}
              description={description}
              category={category}
              priorityName={valueName}
              priority={value}
              picture={picture}
              path={path}
              locationState={locationState}
            />
          </Item>
        );
      })}
    </List>
  );
}

export default EventsList;
