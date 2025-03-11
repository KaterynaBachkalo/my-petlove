import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IFormInputs, IForms, IMyPet } from "../../types";

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

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData: IForms, thunkAPI) => {
    try {
      const response = await petInstance.post("/users/register", formData);

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        return thunkAPI.rejectWithValue(error.response.status);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (formData: IForms, thunkAPI) => {
    try {
      const { data } = await petInstance.post("/users/login", formData);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);

      return data;
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
      const { data } = await petInstance.get("/users/current");

      const updatedPets = data.myPets.map((pet: IMyPet) => ({
        ...pet,
        imgURL: pet.imgURL,
      }));

      const updateUser = {
        ...data,
        avatar: data.avatar,
        myPets: updatedPets,
      };

      return updateUser;
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

export const updateAvatarThunk = createAsyncThunk(
  "auth/avatar",
  async (newPhoto: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", newPhoto);
      const { data } = await petInstance.patch("/users/avatars", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return data.avatar;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "auth/edituserinfo",
  async (formData: IFormInputs, thunkAPI) => {
    try {
      const { data } = await petInstance.patch("/users/current/edit", formData);

      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const addFavorites = createAsyncThunk(
  "favorites/addFavorites",
  async (favoriteId: string, thunkAPI) => {
    try {
      const response = await petInstance.post(
        `notices/favorites/add/${favoriteId}`
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteFavorites = createAsyncThunk(
  "favorites/deleteFavorites",
  async (favoriteId: string, thunkAPI) => {
    try {
      await petInstance.delete(`notices/favorites/remove/${favoriteId}`);
      return { favoriteId };
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const addViewed = createAsyncThunk(
  "viewed/addViewed",
  async (viewedId: string, thunkAPI) => {
    try {
      const response = await petInstance.post(`notices/viewed/add/${viewedId}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const addPet = createAsyncThunk(
  "addPet",
  async (formData: IMyPet, thunkAPI) => {
    try {
      const myformData = new FormData();

      if (formData.imgURL instanceof File) {
        myformData.append("imgURL", formData.imgURL);
      }
      if (formData.sex) {
        myformData.append("sex", formData.sex);
      }

      myformData.append("title", formData.title);
      myformData.append("name", formData.name);
      myformData.append("birthday", formData.birthday);
      myformData.append("species", formData.species);

      const { data } = await petInstance.post(
        "users/current/pets/add",
        myformData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const deletePet = createAsyncThunk(
  "deletePets",
  async (petId: string, thunkAPI) => {
    try {
      await petInstance.delete(`users/current/pets/remove/${petId}`);
      return { petId };
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
