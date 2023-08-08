import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, addEvent, removeEvent } from "./eventsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.items = action.payload; 
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.items.push(action.payload); 
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const eventsReducer = eventsSlice.reducer;
