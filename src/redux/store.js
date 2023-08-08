import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./events/eventsSlice.js";
import { searchReducer } from "./search/searchSlice.js";
import { sortReducer } from "./sort/sortSlice.js";
import { filterReducer } from "./filter/filterSlice.js";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    search: searchReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
});
