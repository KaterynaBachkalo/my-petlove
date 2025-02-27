import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchFriends, fetchNews, fetchNotices } from "./operations";
import { ICity, IFriend, INew, INotice, IPet } from "../../types";
import { toast } from "react-toastify";

export interface IState {
  news: INew[];
  friends: IFriend[];
  notices: INotice[];
  pets: IPet[];
  cities: ICity[];

  totalNews: number;
  totalNotices: number;

  isLoading: boolean;
  error: unknown | null;
  currentPage: number;
}

interface Payload {
  news: INew[];
  friends: IFriend[];
  notices: INotice[];
  pets: IPet[];
  cities: ICity[];

  totalNews: number;
  totalNotices: number;
}

export const handlePending = (state: IState): void => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: IState,
  action: PayloadAction<unknown>
): void => {
  state.isLoading = false;
  state.error = action.payload;

  if (state.error === 400) {
    toast.error("Something went wrong...", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const INITIAL_STATE = {
  news: [],
  friends: [],
  notices: [],
  pets: [],
  cities: [],
  totalNews: 0,
  totalNotices: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
};

const petSlice = createSlice({
  name: "pet",
  initialState: INITIAL_STATE,

  reducers: {
    clearState(state: IState) {
      state.news = [];
      state.friends = [];
      state.notices = [];
      state.pets = [];
      state.cities = [];

      state.totalNews = 0;
      state.totalNotices = 0;
    },
    setCurrentPage(state: IState, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNews.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.news = action.payload.news;
          state.totalNews = action.payload.totalNews;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addCase(
        fetchFriends.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.friends = action.payload.friends;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addCase(
        fetchNotices.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.notices = action.payload.notices;
          state.totalNotices = action.payload.totalNotices;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(fetchNews.pending, fetchFriends.pending, fetchNotices.pending),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          fetchNews.rejected,
          fetchFriends.rejected,
          fetchNotices.rejected
        ),
        handleRejected
      );
  },
});

export const { clearState, setCurrentPage } = petSlice.actions;

// Редюсер слайсу
export const petReducer = petSlice.reducer;
