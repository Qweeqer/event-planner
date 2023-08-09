import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = "https://64d141bdff953154bb7a31af.mockapi.io/api/events/";
  


export const fetchEvents = createAsyncThunk(
  "events/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong, please try again later!");
    }
  }
);

export const addEvent = createAsyncThunk(
  "events/addEvent",
  async (event, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/", event);
      return data;
    } catch (e) {
      return rejectWithValue("Something went wrong, please try again later!");
    }
  }
);

export const removeEvent = createAsyncThunk(
  "events/removeEvent",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue("Something went wrong, please try again later!");
    }
  }
);