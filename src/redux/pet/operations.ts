import { createAsyncThunk } from "@reduxjs/toolkit";
import { petInstance } from "../auth/operations";
import { FetchParams } from "../../types";
import { AxiosError } from "axios";

export const fetchNews = createAsyncThunk(
  "/news/fetchNews",
  async ({ page, limit, title }: FetchParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/news", {
        params: { page, limit, title },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchFriends = createAsyncThunk(
  "/friends/fetchFriends",
  async (_, thunkAPI) => {
    try {
      const response = await petInstance.get("/friends");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchNotices = createAsyncThunk(
  "/notices/fetchNotices",
  async (
    { page, limit, title, category, sex, species, sort }: FetchParams,
    thunkAPI
  ) => {
    try {
      const response = await petInstance.get("/notices", {
        params: { page, limit, title, category, sex, species, sort },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const addToNotices = createAsyncThunk(
  "notices/addToNotices",
  async (noticeId: string, thunkAPI) => {
    try {
      const response = await petInstance.post(`notices/add/${noticeId}`);

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteFromNotices = createAsyncThunk(
  "notices/deleteFromNotices",
  async (noticeId: string, thunkAPI) => {
    try {
      await petInstance.delete(`notices/remove/${noticeId}`);

      return { noticeId };
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
