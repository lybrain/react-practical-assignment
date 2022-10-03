import { Reducer } from "redux";

import { ActionType } from "typesafe-actions";
import * as postActions from "./actions";
import produce, { Draft } from "immer";
import { PostActionTypes, PostState } from "./types";
import Post from "../../core/models/post";

export const initialState: PostState = {
  list: [] as Post[],
  post: undefined,
  loading: false,
};
export type PostAction = ActionType<typeof postActions>;

const reducer: Reducer<PostState, PostAction> = produce(
  (draft: Draft<PostState>, action) => {
    switch (action.type) {
      case PostActionTypes.CREATE_POST: {
        draft.loading = true;
        break;
      }
      case PostActionTypes.CREATE_POST_SUCCESS: {
        const { post } = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.post = post;
        break;
      }
      case PostActionTypes.CREATE_POST_FAILED: {
        const { message } = action.payload;
        draft.loading = false;
        draft.success = false;
        draft.error = message;
        break;
      }
      case PostActionTypes.GET_POST_LIST: {
        draft.loading = true;
        break;
      }
      case PostActionTypes.GET_POST_LIST_SUCCESS: {
        const { posts } = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.list = posts;
        break;
      }
      case PostActionTypes.GET_POST_LIST_FAILED: {
        draft.loading = false;
        draft.success = false;
        break;
      }
    }
  },
  initialState
);

export { reducer as postReducer };
