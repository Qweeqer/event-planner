import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { format, parseISO } from "date-fns";

import useOutsideClick from "../../hooks/useClickOutside";

import {
  Wrap,
  WrapInput,
  Input,
  StyledIconUp,
  StyledIconDown,
  Popup,
  Text,
  BtnWrap,
  BtnCancel,
  BtnChoose,
} from "./InputDate.styled";
import "react-calendar/dist/Calendar.css";

function InputDate({ field, form, options, label, meta, ...props }) {
  const formValue = field.value ? parseISO(field.value) : null;
  const [value, setValue] = useState(formValue);
  const [changeValue, setChangeValue] = useState(formValue);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const lang = useSelector((state) => state.events.lang);

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(inputRef, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const onChange = (value) => {
    setChangeValue(value);
  };

  const onChoose = (value) => {
    setValue(value);
    togglePopup();

    form.setFieldValue(field.name, value);
  };

  return (
    <Wrap ref={inputRef}>
      <WrapInput>
        <Input onClick={togglePopup}>
          <Text $select={value}>
            {!isOpen && (
              <>
                {value ? (
                  format(value, "dd.MM")
                ) : (
                  <>{lang.inputDateSelectText}</>
                )}
              </>
            )}
            {isOpen && `${lang.inputDateSelectText} ${label}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={togglePopup} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={togglePopup} color="#7B61FF" />
        )}
      </WrapInput>

      {isOpen && (
        <Popup>
          <Calendar
            calendarType="gregory"
            locale="en-EN"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            onChange={onChange}
            value={changeValue}
          />
          <BtnWrap>
            <BtnCancel onClick={togglePopup} type="button">
              {lang.inputDateCancelBtnText}
            </BtnCancel>
            <BtnChoose
              onClick={() => {
                onChoose(changeValue);
              }}
              type="button"
            >
              {lang.inputChooseDateText}
            </BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </Wrap>
  );
}

export default InputDate;
