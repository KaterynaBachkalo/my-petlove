import { createSelector } from "@reduxjs/toolkit";
import { IState } from "./authSlice";

const selectAuth = (state: { auth: IState }) => state.auth;

export const selectAuthAccessToken = createSelector(
  selectAuth,
  (auth) => auth.accessToken
);

export const selectAuthRefreshToken = createSelector(
  selectAuth,
  (auth) => auth.refreshToken
);

export const selectCurrentUser = createSelector(
  selectAuth,
  (auth) => auth.user
);

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.authenticated
);

export const selectAuthIsLoading = createSelector(
  selectAuth,
  (auth) => auth.isLoading
);

export const selectAuthError = createSelector(selectAuth, (auth) => auth.error);

export const selectPets = createSelector(
  selectAuth,
  (auth) => auth.user.myPets
);
