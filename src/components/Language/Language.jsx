import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { languageSelection } from "../../redux/events/eventsSlice";

import { Wrap } from "./Language.styled";

function Language({ big }) {
  const lang = useSelector((state) => state.events.lang);
  const [currentLang, setCurrentLang] = useState(lang.lang);
  const dispatch = useDispatch();

  const setLang = (lang) => {
    setCurrentLang(lang);
    dispatch(languageSelection(lang));
  };

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Wrap value={currentLang} onChange={handleLanguageChange}>
      <option value="ua">&nbsp;UA</option>
      <option value="en">&nbsp;En</option>
    </Wrap>
  );
}

export default Language;
