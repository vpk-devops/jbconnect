import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInApi, signUpApi } from "../../api/authApi";
import { SignInPayload, SignUpPayload, AuthResponse } from "./authTypes";
import axios from "axios";

export const signUpUser = createAsyncThunk<
  AuthResponse,
  SignUpPayload,
  { rejectValue: string }
>("auth/signUpUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await signUpApi(payload);
    return res.data as AuthResponse;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const msg = err.response?.data?.message ?? err.message;
      return rejectWithValue(String(msg));
    }
    if (err instanceof Error) return rejectWithValue(err.message);
    return rejectWithValue("An unexpected error occurred");
  }
});

export const signInUser = createAsyncThunk<
  AuthResponse,
  SignInPayload,
  { rejectValue: string }
>("auth/signInUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await signInApi(payload);
    return res.data as AuthResponse;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const msg = err.response?.data?.message ?? err.message;
      return rejectWithValue(String(msg));
    }
    if (err instanceof Error) return rejectWithValue(err.message);
    return rejectWithValue("An unexpected error occurred");
  }
});
