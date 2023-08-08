import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "../search/searchSelectors";
import { selectSortProperty } from "../sort/sortSelectors";
import { selectSortOrder } from "../sort/sortSelectors";
import { selectFilterValue } from "../filter/filterSelectors";

export const selectEvents = (state) => state.events.items;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectError = (state) => state.events.error;

export const selectVisibleEvents = createSelector(
  [
    selectEvents,
    selectSearchValue,
    selectSortProperty,
    selectSortOrder,
    selectFilterValue,
  ],
  (events, searchValue, sortProperty, sortOrder, filterValue) => {
    const normalizedSearch = searchValue.toLowerCase();
    let searchEvents = events.filter(({ title }) =>
      title.toLowerCase().includes(normalizedSearch)
    );

    if (filterValue) {
      searchEvents = searchEvents.filter(
        ({ category }) => category.toLowerCase() === filterValue.toLowerCase()
      );
    }

    if (sortOrder === "asc" && sortProperty === "title") {
      searchEvents = searchEvents.sort((a, b) =>
        b[sortProperty].localeCompare(a[sortProperty])
      );
    }
    if (sortOrder === "desc" && sortProperty === "title") {
      searchEvents = searchEvents.sort((a, b) =>
        a[sortProperty].localeCompare(b[sortProperty])
      );
    }

    if (sortOrder === "asc" && sortProperty === "priority") {
      searchEvents = searchEvents.sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
    }
    if (sortOrder === "desc" && sortProperty === "priority") {
      searchEvents = searchEvents.sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
    }

    if (sortOrder === "asc" && sortProperty === "date") {
      searchEvents = Object.entries(searchEvents)
        .sort(([, a], [, b]) => {
          return new Date(a.date) - new Date(b.date);
        })
        .map((i) => {
          return i[1];
        });
    }
    if (sortOrder === "desc" && sortProperty === "date") {
      searchEvents = Object.entries(searchEvents)
        .sort(([, a], [, b]) => {
          return new Date(b.date) - new Date(a.date);
        })
        .map((i) => {
          return i[1];
        });
    }

    return searchEvents;
  }
);
