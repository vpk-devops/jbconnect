import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./authThunks";
import type { AuthResponse } from "./authTypes";

type AuthState = {
  user: AuthResponse["user"] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
  },
  extraReducers: (builder) => {
    // Sign up
    builder.addCase(signUpUser.pending, (s) => {
      s.loading = true;
      s.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (s, { payload }) => {
      s.loading = false;
      s.user = payload.user;
      s.token = payload.token;
      localStorage.setItem("token", payload.token);
    });
    builder.addCase(signUpUser.rejected, (s, { payload }) => {
      s.loading = false;
      s.error = payload ?? "Sign up failed";
    });

    // Sign in
    builder.addCase(signInUser.pending, (s) => {
      s.loading = true;
      s.error = null;
    });
    builder.addCase(signInUser.fulfilled, (s, { payload }) => {
      s.loading = false;
      s.user = payload.user;
      s.token = payload.token;
      localStorage.setItem("token", payload.token);
    });
    builder.addCase(signInUser.rejected, (s, { payload }) => {
      s.loading = false;
      s.error = payload ?? "Sign in failed";
    });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
