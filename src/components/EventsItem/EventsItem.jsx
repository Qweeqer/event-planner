import React from "react";
import { format } from "date-fns";
import {
  Card,
  ImgWrap,
  DateText,
  Descr,
  Title,
  Text,
  Labels,
  Category,
  Priority,
  ItemLink,
} from "./EventsItem.styled";

function EventsListItem({
  title,
  date,
  time,
  location,
  description,
  category,
  priority,
  priorityName,
  picture,
  path,
  locationState,
}) {
  const formattedDate = format(new Date(date), "dd.MM");
  const formattedTime = time;
  const imgWrapStyle = picture ? { backgroundImage: `url(${picture})` } : {};

  return (
    <Card>
      <ImgWrap style={imgWrapStyle}>
        <Labels>
          <Category>{category}</Category>
          <Priority $priority={`${priority}`}>{priorityName}</Priority>
        </Labels>
        <DateText>
          <div>
            {formattedDate} at {formattedTime}
          </div>
          <p>{location}</p>
        </DateText>
      </ImgWrap>
      <Descr>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ItemLink to={path} state={{ from: locationState }}>
          More info
        </ItemLink>
      </Descr>
    </Card>
  );
}

export default EventsListItem;
