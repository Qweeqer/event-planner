import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import useOutsideClick from "../../hooks/useClickOutside";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { Wrap, WrapIcon } from "./Filter.styled";
import { Filters3 } from "react-swm-icon-pack";
import FilterList from "../FilterList/FilterList";

function Filter() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const filterRef = useRef(null);
  const { isMobile, isTablet } = useResponsiveBreakpoints();

  const lang = useSelector((state) => state.events.lang);
const translatedFilter = filter
  ? lang[`category${filter}`]
  : lang.filterCategoryTitle;

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(filterRef, outsideClickHandler);

  const onSelect = (value) => {
    dispatch(setFilterValue(value));
    setFilter(value);
  };

  return (
    <Wrap
      $open={isOpen}
      $filter={filter}
      type="button"
      ref={filterRef}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <WrapIcon>
        {isMobile && (
          <>
            {isOpen && <>{translatedFilter}</>}
            {filter || isOpen ? (
              <Filters3 color="#7B61FF" />
            ) : (
              <Filters3 color="#3F3F3F" />
            )}
          </>
        )}
        {isTablet && (
          <>
            <>{translatedFilter}</>
            {isOpen || filter ? (
              <Filters3 color="#7B61FF" />
            ) : (
              <Filters3 color="#3F3F3F" />
            )}
          </>
        )}
      </WrapIcon>

      {isOpen && <FilterList filter={filter} onSelect={onSelect} />}
    </Wrap>
  );
}

export default Filter;
