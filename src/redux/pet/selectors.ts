import { IFilter } from "../../types";
import { IState } from "./petSlice";

export const selectNews = (state: { pet: IState }) => state.pet.news;

export const selectFriends = (state: { pet: IState }) => state.pet.friends;

export const selectNotices = (state: { pet: IState }) => state.pet.notices;

export const selectIsLoading = (state: { pet: IState }) => state.pet.isLoading;

export const selectError = (state: { pet: IState }) => state.pet.error;

export const selectFilter = (state: { filter: IFilter }) => state.filter.filter;

export const selectCurrentPage = (state: { pet: IState }) =>
  state.pet.currentPage;

export const selectTotalNews = (state: { pet: IState }) => state.pet.totalNews;

export const selectTotalNotices = (state: { pet: IState }) =>
  state.pet.totalNotices;
