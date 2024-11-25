import { createSlice } from "@reduxjs/toolkit";

export interface IFilter {
  category: string;
  gender: string;
  type: string;
}

const INITIAL_STATE: IFilter = {
  category: "",
  gender: "",
  type: "",
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
