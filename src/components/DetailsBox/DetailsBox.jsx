import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import Notiflix from "notiflix";

import { removeEvent } from "../../redux/events/eventsOperations";
import useClickOutside from "../../hooks/useClickOutside";
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

  const lang = useSelector((state) => state.events.lang);

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
    Notiflix.Notify.success(lang.deleteSuccessText);
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
            {formatedDate} {lang.atText} {time}
          </Label>
        </LabelsWrap>
        <BtnWrap>
          <EditBtn to={path} state={{ from: locationState }}>
            {lang.editBtnText}
          </EditBtn>
          <DelBtn onClick={onTogglePopup} type="button">
            {lang.deleteBtnText}
          </DelBtn>
          {isVisiblePopup && (
            <Popup ref={popupRef}>
              <p> {lang.popUpDeleteText}</p>
              <DelBtn onClick={onClickDelete}>{lang.popUpBtnYes}</DelBtn>
              <DelBtn onClick={onTogglePopup}>{lang.popUpBtnNo}</DelBtn>
            </Popup>
          )}
        </BtnWrap>
      </Wrap>
    </Box>
  );
}

export default DetailsBox;
