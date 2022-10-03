import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import { AuthState } from "./auth/types";
import { authReducer } from "./auth/reducer";
import postSaga from "./post/sagas";
import { PostState } from "./post/types";
import { postReducer } from "./post/reducer";

export interface ApplicationState {
  auth: AuthState;
  post: PostState;
}

export const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    post: postReducer,
  });

export function* rootSaga() {
  yield all([fork(postSaga)]);
}
