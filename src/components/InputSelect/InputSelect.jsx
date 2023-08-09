import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import useOutsideClick from "../../hooks/useClickOutside";

import {
  Select,
  Input,
  SelectBody,
  SelectItem,
  SelectHeader,
  Text,
  StyledIconDown,
  StyledIconUp,
} from "./InputSelect.styled";

function InputSelect({ field, form, options, label, meta, ...props }) {

const selectedOption = field.value
  ? options.find((item) => item.value === field.value)
  : null;
  const lang = useSelector((state) => state.events.lang);
const formValue = selectedOption
  ? lang[`category${selectedOption.valueName}`] ||
    lang[`priority${selectedOption.valueName}`]
  : "";

  const [selectValue, setSelectValue] = useState(formValue);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);


  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(inputRef, outsideClickHandler);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

const onSelect = (obj) => {
  const translatedValue =
    lang[`category${obj.valueName}`] || lang[`priority${obj.valueName}`];
  setSelectValue(translatedValue);
  togglePopup();
  form.setFieldValue(field.name, obj.value);
};

  
  return (
    <Select ref={inputRef}>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <Text $select={selectValue}>
            {!isOpen && (
              <>{selectValue ? selectValue : <>{lang.inputDateSelectText}</>}</>
            )}
            {isOpen && `${lang.inputDateSelectText}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={togglePopup} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={togglePopup} color="#7B61FF" />
        )}
      </SelectHeader>

      {isOpen && (
        <SelectBody>
          {options.map((item, index) => {
            return (
              <SelectItem
                onClick={() => {
                  onSelect(item);
                }}
                key={index}
              >
                {lang[`category${item.valueName}`] ||
                  lang[`priority${item.valueName}`]}
              </SelectItem>
            );
          })}
        </SelectBody>
      )}
    </Select>
  );
}

export default InputSelect;
