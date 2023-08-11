import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import defaultImage from '../../assets/images/image404.jpg'; 

import {
  Card,
  ImgWrap,
  DateText,
  Description,
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
  const imgWrapStyle = picture
    ? { backgroundImage: `url(${picture})` }
    : { backgroundImage: `url(${defaultImage})` };

  const lang = useSelector((state) => state.events.lang);

  return (
    <Card>
      <ImgWrap style={imgWrapStyle}>
        <Labels>
          <Category>{lang[`category${category}`]}</Category>

          <Priority $priority={`${priority}`}>
            {lang[`priority${priorityName}`]}
          </Priority>
        </Labels>
        <DateText>
          <div>
            {formattedDate} {lang.atText} {formattedTime}
          </div>
          <p>{location}</p>
        </DateText>
      </ImgWrap>
      <Description>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ItemLink to={path} state={{ from: locationState }}>
          {lang.eventsItemBtnText}
        </ItemLink>
      </Description>
    </Card>
  );
}

export default EventsListItem;
