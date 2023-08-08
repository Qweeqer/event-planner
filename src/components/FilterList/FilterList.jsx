import React from "react";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { List, Item } from "../Filter/Filter.styled";
import { categories } from "../../helpers/variables";

function FilterList({ filter, onSelect }) {
  const dispatch = useDispatch();

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
            <p> {valueName}</p>
          </Item>
        );
      })}
    </List>
  );
}

export default FilterList;
