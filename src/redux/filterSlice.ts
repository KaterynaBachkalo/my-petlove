import { createSlice } from "@reduxjs/toolkit";
import { IFilter } from "../types";

const INITIAL_STATE: IFilter = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = "";
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
