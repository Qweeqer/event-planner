import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilterValue } from "../../redux/filter/filterSlice";
import { List, Item } from "../Filter/Filter.styled";
import { categories } from "../../helpers/variables";

function FilterList({ filter, onSelect }) {
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.events.lang);
  return (
    <List>
      {categories.map(({ value, valueName }, index) => {
        const select = filter === value;
        return (
          <Item
            $select={select}
            onClick={() => {
              onSelect(value);
              dispatch(setFilterValue(value));
            }}
            key={index}
          >
            <p> {lang[`category${valueName}`]}</p>
          </Item>
        );
      })}
    </List>
  );
}

export default FilterList;
