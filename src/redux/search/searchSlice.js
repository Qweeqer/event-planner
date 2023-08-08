import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = { value: "" };

const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
