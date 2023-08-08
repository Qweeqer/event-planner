import { createSlice } from "@reduxjs/toolkit";

const sortInitialState = {
  name: "",
  property: "",
  order: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState: sortInitialState,
  reducers: {
    setSortValue(state, { payload }) {
      state.name = payload.name;
      state.property = payload.property;
      state.order = payload.order;
    },
  },
});

export const { setSortValue } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
