import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { petReducer } from "./pet/petSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, resetToken } from "./auth/authSlice";
import { petInstance, refreshTokenThunk } from "./auth/operations";
import { AxiosResponse } from "axios";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const petConfig = {
  key: "pet",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  pet: persistReducer(petConfig, petReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

petInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { accessToken } = state.auth;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

petInstance.interceptors.response.use(
  function (response): AxiosResponse {
    return response;
  },
  async function (error) {
    if (error.response.data.message === "Invalid refresh token") {
      store.dispatch(resetToken());
      return;
    }

    if (error.response.status === 401) {
      try {
        const refreshToken = store.getState().auth.refreshToken;

        if (!refreshToken) {
          return;
        }

        const isRefreshTokenFail = await store.dispatch(refreshTokenThunk());

        if (isRefreshTokenFail.payload.errorCode === 500) {
          store.dispatch(resetToken());

          return;
        }

        if (isRefreshTokenFail.type === "auth/refreshTokens/rejected") {
          // console.error("Refresh token Error");

          return;
        }

        const newToken = store.getState().auth.refreshToken;
        error.config.headers.Authorization = `Bearer ${newToken}`;

        return petInstance(error.config);
      } catch (refreshError) {
        return refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
