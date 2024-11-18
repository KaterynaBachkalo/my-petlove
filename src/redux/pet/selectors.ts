import { IState } from "./petSlice";
import { IFilter } from "../filterSlice";

export const selectNews = (state: { pet: IState }) => state.pet.news;

export const selectFriends = (state: { pet: IState }) => state.pet.friends;

export const selectNotices = (state: { pet: IState }) => state.pet.notices;

export const selectIsLoading = (state: { pet: IState }) => state.pet.isLoading;

export const selectError = (state: { pet: IState }) => state.pet.error;

export const selectFilter = (state: IFilter) => state.filter;

export const selectCurrentPage = (state: { pet: IState }) =>
  state.pet.currentPage;

export const selectTotalNews = (state: { pet: IState }) => state.pet.totalNews;

export const selectTotalNotices = (state: { pet: IState }) =>
  state.pet.totalNotices;
