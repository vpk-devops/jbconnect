import axiosInstance from "./axiosInstance";
import { SignInPayload, SignUpPayload } from "../features/auth/authTypes";

export const signUpApi = (data: SignUpPayload) =>
  axiosInstance.post("/auth/signup", data);

export const signInApi = (data: SignInPayload) =>
  axiosInstance.post("/auth/signin", data);
