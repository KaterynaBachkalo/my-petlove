import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addFavorites,
  addPet,
  addViewed,
  deleteFavorites,
  deletePet,
  editUserThunk,
  logInThunk,
  logOutThunk,
  refreshTokenThunk,
  refreshUserThunk,
  registerThunk,
  updateAvatarThunk,
} from "./operations";
import { toast } from "react-toastify";
import { IMyPet } from "../../types";

export interface IState {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string | null;
    name: string | null;
    favorites: string[];
    viewed: string[];
    avatar: string;
    phone: number | null;
    myPets: IMyPet[];
  };
  authenticated: boolean;
  isLoading: boolean;
  error: unknown | null;
}

const handlePending = (state: IState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error = action.payload;

  if (state.error === 401) {
    toast.error("The email or password are incorrect", {
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

  if (state.error === 409) {
    toast.error("This email is exist", {
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

  if (state.error === 500) {
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

const handleFulfilled = (state: IState, action: PayloadAction<IState>) => {
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.user = action.payload.user;
  state.isLoading = false;
  state.authenticated = true;
  state.error = null;
};

const INITIAL_STATE: IState = {
  accessToken: "",
  refreshToken: "",
  user: {
    email: null,
    name: null,
    favorites: [],
    viewed: [],
    avatar: "",
    phone: null,
    myPets: [],
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  reducers: {
    resetToken(state: IState) {
      return (state = {
        ...state,
        accessToken: "",
        refreshToken: "",
        authenticated: false,
      });
    },
    setToken(state: IState, action) {
      return (state = {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logInThunk.fulfilled, handleFulfilled)

      .addCase(registerThunk.fulfilled, handleFulfilled)

      .addCase(refreshUserThunk.fulfilled, (state: IState, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
        state.error = null;
        if (state.accessToken === null) return;
        if (state.refreshToken === null) return;
      })
      .addCase(
        refreshTokenThunk.fulfilled,
        (state: IState, action: PayloadAction<IState>) => {
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.isLoading = false;
          state.authenticated = true;
          state.error = null;
        }
      )
      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addCase(
        addFavorites.fulfilled,
        (state: IState, action: PayloadAction<string[]>) => {
          state.isLoading = false;
          state.user.favorites = action.payload;
          state.error = null;
          toast.success("New favorite pet was successfully added");
        }
      )

      .addCase(
        deleteFavorites.fulfilled,
        (state: IState, action: PayloadAction<{ favoriteId: string }>) => {
          state.isLoading = false;
          state.user.favorites = state.user.favorites.filter(
            (favorite) => favorite !== action.payload.favoriteId
          );
          state.error = null;
          toast.success("New favorite pet was successfully removed");
        }
      )
      .addCase(
        addViewed.fulfilled,
        (state: IState, action: PayloadAction<string[]>) => {
          state.isLoading = false;
          state.user.viewed = action.payload;
          state.error = null;
        }
      )
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
      })

      .addCase(editUserThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })

      .addCase(
        addPet.fulfilled,
        (state: IState, action: PayloadAction<IMyPet>) => {
          state.user.myPets.push(action.payload);
        }
      )
      .addCase(
        deletePet.fulfilled,
        (state: IState, action: PayloadAction<{ petId: string }>) => {
          state.isLoading = false;
          state.user.myPets = state.user.myPets.filter(
            (pet) => pet._id !== action.payload.petId
          );
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          logInThunk.pending,
          registerThunk.pending,
          refreshUserThunk.pending,
          refreshTokenThunk.pending,
          addFavorites.pending,
          addViewed.pending,
          deleteFavorites.pending,
          updateAvatarThunk.pending,
          editUserThunk.pending,
          addPet.pending,
          deletePet.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          logInThunk.rejected,
          registerThunk.rejected,
          refreshUserThunk.rejected,
          refreshTokenThunk.rejected,
          addFavorites.rejected,
          addViewed.rejected,
          deleteFavorites.rejected,
          updateAvatarThunk.rejected,
          editUserThunk.rejected,
          addPet.rejected,
          deletePet.rejected
        ),
        handleRejected
      );
  },
});

export const { resetToken, setToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
