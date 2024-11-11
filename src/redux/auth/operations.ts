import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IForms } from "../../types";

export const petInstance = axios.create({
  baseURL: "http://localhost:4000/api/",
});

const setAccessToken = (accessToken: string) => {
  petInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const setRefreshToken = (refreshToken: string) => {
  petInstance.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

export const refreshTokensApi = async (oldRefreshToken: string) => {
  const response = await petInstance.post("users/refresh-token", {
    token: oldRefreshToken,
  });
  return response.data;
};

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (formData: IForms, thunkAPI) => {
    try {
      const response = await petInstance.post("/users/login", formData);
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        return thunkAPI.rejectWithValue(error.response.status);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await petInstance.post("/users/logout");
      return;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const accessToken = state.auth.accessToken;
    const refreshToken = state.auth.refreshToken;
    try {
      if (accessToken) setAccessToken(accessToken);
      if (refreshToken) setRefreshToken(refreshToken);
      const response = await petInstance.get("/users/user-info");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const accessToken = state.auth.accessToken;
      const refreshToken = state.auth.refreshToken;

      if (!accessToken || !refreshToken) return false;
      return true;
    },
  }
);

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshTokens",
  async (_, thunkAPI) => {
    try {
      const currentState = thunkAPI.getState() as RootState;
      const oldRefreshToken = currentState.auth.refreshToken;

      if (oldRefreshToken) {
        const response = await refreshTokensApi(oldRefreshToken);
        const { accessToken, refreshToken } = response;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        return response;
      } else {
        throw new Error("Refresh token is missing");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
