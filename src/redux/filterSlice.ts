import { createSlice } from "@reduxjs/toolkit";

export interface IFilter {
  title: string;
  category: string;
  gender: string;
  type: string;
  location: string;
}

const INITIAL_STATE: IFilter = {
  title: "",
  category: "",
  gender: "",
  type: "",
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
