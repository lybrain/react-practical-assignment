export const enum AuthActionTypes {
  AUTH_LOGIN = "@@auth/LOGIN",
  AUTH_LOGOUT = "@@auth/LOGOUT",
}

export interface Credentials {
  readonly username: string;
}

export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly error?: string;
  readonly username?: string | null;
}
