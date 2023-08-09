import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { setSearchValue } from "../../redux/search/searchSlice";
import ClearButton from "../ClearButton/ClearButton";

import { Input, StyledIcon, InputWrap } from "./Search.styled";

const DEBOUNCE_DELAY = 150;

function Search() {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.events.lang);
const handleChange = useCallback(
  (value) => {
    const delayedFunction = debounce(() => {
      dispatch(setSearchValue(value));
    }, DEBOUNCE_DELAY);

    delayedFunction();
  },
  [dispatch]
);


  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSearch(value);
    handleChange(value);
  };

  const onClickClear = useCallback(() => {
    setSearch("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  }, [dispatch]);

  return (
    <InputWrap>
      <Input
        ref={inputRef}
        onChange={handleInputChange}
        value={search}
        name="search"
        placeholder={lang.searchPlaceholderText}
      />
      <StyledIcon color="#7B61FF" />
      {search && (
        <ClearButton
          onClick={() => {
            onClickClear();
          }}
        />
      )}
    </InputWrap>
  );
}

export default Search;
