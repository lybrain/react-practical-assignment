import { createStandardAction } from "typesafe-actions";
import { AuthActionTypes, Credentials } from "./types";

export const login = createStandardAction(
  AuthActionTypes.AUTH_LOGIN
)<Credentials>();

export const logout = createStandardAction(AuthActionTypes.AUTH_LOGOUT)<void>();
