import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters2, ArrowSmallUp, ArrowSmallDown } from "react-swm-icon-pack";

import { setSortValue } from "../../redux/sort/sortSlice";
import { selectSortProperty } from "../../redux/sort/sortSelectors";
import useResponsiveBreakpoints from "../../hooks/useResponsiveBreakpoints";
import useOutsideClick from "../../hooks/useClickOutside";
import { sortValues } from "../../helpers/variables";

import { Wrap, Item, WrapIcon, List } from "./Sort.styled";

function Sort() {
  const dispatch = useDispatch();
  const isSortVal = useSelector(selectSortProperty);
  const sortValue = useSelector((state) => state.sort);
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(sortValue);
  const sortRef = useRef(null);
  const { isMobile, isTablet } = useResponsiveBreakpoints();

  const lang = useSelector((state) => state.events.lang);
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
          {isOpen && <p>{lang.sortTagText}</p>}
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
            <span>{lang.sortTagText} </span>
            {!isOpen && (
              <span>
                {
                  lang[
                    `sort${
                      sort?.name.charAt(0).toUpperCase() + sort?.name.slice(1)
                    }${
                      sort?.order.charAt(0).toUpperCase() + sort?.order.slice(1)
                    }`
                  ]
                }
              </span>
            )}
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
            const keyName = `sort${
              item.name.charAt(0).toUpperCase() + item.name.slice(1)
            }${item.order.charAt(0).toUpperCase() + item.order.slice(1)}`;

            return (
              <Item
                $select={select}
                onClick={() => {
                  onSelect(item);
                }}
                key={index}
              >
                <p>{lang[keyName]}</p>

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
