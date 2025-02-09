import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addFavorites,
  deleteFavorites,
  editThunk,
  logInThunk,
  logOutThunk,
  refreshTokenThunk,
  refreshUserThunk,
  registerThunk,
  updateAvatarThunk,
} from "./operations";
import { toast } from "react-toastify";

export interface IState {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string | null;
    name: string | null;
    favorites: string[];
    avatar: string;
    phone: number | null;
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
    avatar: "",
    phone: null,
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

      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
      })

      .addCase(editThunk.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
      })

      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          logInThunk.pending,
          registerThunk.pending,
          refreshUserThunk.pending,
          refreshTokenThunk.pending,
          addFavorites.pending,
          deleteFavorites.pending,
          updateAvatarThunk.pending,
          editThunk.pending
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
          deleteFavorites.rejected,
          updateAvatarThunk.rejected,
          editThunk.rejected
        ),
        handleRejected
      );
  },
});

export const { resetToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
