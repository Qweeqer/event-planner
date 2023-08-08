import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeEvent } from "../../redux/events/eventsOperations";
import useClickOutside from "../../hooks/useClickOutside";
import { format } from "date-fns";
import {
  Box,
  Image,
  Wrap,
  Text,
  LabelsWrap,
  Label,
  BtnWrap,
  EditBtn,
  DelBtn,
  Popup,
} from "./DetailsBox.styled";

function DetailsBox({
  id,
  title,
  date,
  time,
  location,
  description,
  category,
  priority,
  priorityName,
  picture,
  locationState,
}) {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const path = `/events/${id}/edit`;

  const outsideClickHandler = () => {
    setIsVisiblePopup(false);
  };

  useClickOutside(popupRef, outsideClickHandler);

  const onTogglePopup = () => {
    setIsVisiblePopup((prev) => !prev);
  };

  const onClickDelete = () => {
    dispatch(removeEvent(id));
    navigate("/");
  };

  const dateOnTimeFormat = new Date(date);
  const formatedDate = format(dateOnTimeFormat, "dd.MM");

  return (
    <Box>
      <Image src={`${picture}`} alt={`${title}`} />
      <Wrap>
        <Text>{description}</Text>
        <LabelsWrap>
          <Label>{category}</Label>
          <Label $priority={`${priority}`}>{priorityName}</Label>
          <Label>{location}</Label>
          <Label>
            {formatedDate} at {time}
          </Label>
        </LabelsWrap>
        <BtnWrap>
          <EditBtn to={path} state={{ from: locationState }}>
            Edit
          </EditBtn>
          <DelBtn onClick={onTogglePopup} type="button">
            Delete event
          </DelBtn>
          {isVisiblePopup && (
            <Popup ref={popupRef}>
              <p> Are you sure to delete this event?</p>
              <DelBtn onClick={onClickDelete}>Yes</DelBtn>
              <DelBtn onClick={onTogglePopup}>No</DelBtn>
            </Popup>
          )}
        </BtnWrap>
      </Wrap>
    </Box>
  );
}

export default DetailsBox;
