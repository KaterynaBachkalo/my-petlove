import { createSlice } from "@reduxjs/toolkit";
import { IFilter } from "../types";

const INITIAL_STATE: IFilter = {
  title: "",
  category: "",
  sex: "",
  species: "",
  location: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,

  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilter() {
      return INITIAL_STATE;
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
