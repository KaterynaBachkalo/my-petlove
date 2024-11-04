import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  logInThunk,
  logOutThunk,
  refreshTokenThunk,
  refreshUserThunk,
} from "./operations";
import { toast } from "react-toastify";

export interface IState {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string | null;
    name: string | null;
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
      .addCase(logOutThunk.fulfilled, (state: IState) => {
        state.accessToken = "";
        state.refreshToken = "";
        state.user = { email: null, name: null };
        state.isLoading = false;
        state.authenticated = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          logInThunk.pending,
          refreshUserThunk.pending,
          refreshTokenThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          logInThunk.rejected,
          refreshUserThunk.rejected,
          refreshTokenThunk.rejected
        ),
        handleRejected
      );
  },
});

export const { resetToken } = authSlice.actions;

export const authReducer = authSlice.reducer;