import React, { useState, useRef } from "react";
import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import useOutsideClick from "../../hooks/useClickOutside";
import { Wrap, Item, WrapIcon, List } from "./Sort.styled";
import { Filters2, ArrowSmallUp, ArrowSmallDown } from "react-swm-icon-pack";
import { useDispatch, useSelector } from "react-redux";
import { setSortValue } from "../../redux/sort/sortSlice";
import { sortValues } from "../../helpers/variables";
import { selectSortProperty } from "../../redux/sort/sortSelectors";

function Sort() {
  const dispatch = useDispatch();
  const isSortVal = useSelector(selectSortProperty);
  const sortValue = useSelector((state) => state.sort);
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(sortValue);
  const sortRef = useRef(null);
  const { isMobile, isTablet } = useResponsiveBreakpoints();

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(sortRef, outsideClickHandler);

  const onSelect = (value) => {
    dispatch(setSortValue(value));
    setSort(value);
  };

  return (
    <Wrap
      $open={isOpen}
      $sort={isSortVal}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      ref={sortRef}
      type="button"
    >
      {isMobile && (
        <WrapIcon>
          {isOpen && <p>Sort by</p>}
          {isOpen || isSortVal ? (
            <Filters2 color="#7B61FF" />
          ) : (
            <Filters2 color="#3F3F3F" />
          )}
        </WrapIcon>
      )}
      {isTablet && (
        <WrapIcon>
          <div>
            <span>Sort by </span>
            {!isOpen && <span>{sort?.name}</span>}
          </div>
          {!isOpen && (
            <>
              {sort?.order === "desc" && <ArrowSmallDown color="#7B61FF" />}
              {sort?.order === "asc" && <ArrowSmallUp color="#7B61FF" />}
            </>
          )}

          {!isSortVal && !isOpen && <Filters2 color="#3F3F3F" />}
          {!sort && isOpen && <Filters2 color="#7B61FF" />}
          {sort && isOpen && <Filters2 color="#7B61FF" />}
        </WrapIcon>
      )}

      {isOpen && (
        <List>
          {sortValues.map((item, index) => {
            const select =
              sort?.property === item.property && sort?.order === item.order;
            return (
              <Item
                $select={select}
                onClick={() => {
                  onSelect(item);
                }}
                key={index}
              >
                <p>by {item.name}</p>
                {item.order === "asc" ? (
                  select ? (
                    <ArrowSmallUp color="#7B61FF" />
                  ) : (
                    <ArrowSmallUp color="#aca7c3" />
                  )
                ) : select ? (
                  <ArrowSmallDown color="#7B61FF" />
                ) : (
                  <ArrowSmallDown color="#aca7c3" />
                )}
              </Item>
            );
          })}
        </List>
      )}
    </Wrap>
  );
}

export default Sort;
