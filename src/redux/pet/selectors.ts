import { IState } from "./petSlice";
import { IFilter } from "../filterSlice";

export const selectNews = (state: { admin: IState }) => state.admin.news;

export const selectFriends = (state: { admin: IState }) => state.admin.friends;

export const selectNotices = (state: { admin: IState }) => state.admin.notices;

export const selectIsLoading = (state: { admin: IState }) =>
  state.admin.isLoading;

export const selectError = (state: { admin: IState }) => state.admin.error;

export const selectFilter = (state: IFilter) => state.filter;

export const selectCurrentPage = (state: { admin: IState }) =>
  state.admin.currentPage;

export const selectTotalNews = (state: { admin: IState }) =>
  state.admin.totalNews;

export const selectTotalNotices = (state: { admin: IState }) =>
  state.admin.totalNotices;
