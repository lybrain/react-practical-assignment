import { Reducer } from "redux";

import { AuthActionTypes, AuthState } from "./types";

import { ActionType } from "typesafe-actions";
import * as authActions from "./actions";
import produce, { Draft } from "immer";
import storage from "../../constants/storage.json";

export type AuthAction = ActionType<typeof authActions>;

const login = localStorage.getItem(storage.LOGIN);

export const initialState: AuthState = {
  error: undefined,
  isAuthenticated: !!login,
  username: login,
};

const reducer: Reducer<AuthState, AuthAction> = produce(
  (draft: Draft<AuthState>, action) => {
    switch (action.type) {
      case AuthActionTypes.AUTH_LOGIN: {
        const { username } = action.payload;
        draft.username = username;
        draft.error = undefined;
        draft.isAuthenticated = true;
        break;
      }
      case AuthActionTypes.AUTH_LOGOUT: {
        draft.username = undefined;
        draft.error = undefined;
        draft.isAuthenticated = false;
        break;
      }
    }
  },
  initialState
);

export { reducer as authReducer };
