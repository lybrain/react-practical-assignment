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
  isDeleted:false
};
export type PostAction = ActionType<typeof postActions>;

const reducer: Reducer<PostState, PostAction> = produce(
  (draft: Draft<PostState>, action) => {
    switch (action.type) {
      case PostActionTypes.INIT_STATE: {
        
        draft = { ...initialState };
        break;
      }
      case PostActionTypes.GET_POST_SUCCESS:
      case PostActionTypes.CREATE_POST_SUCCESS: {
        const { post } = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.post = post;
        break;
      }
      case PostActionTypes.CREATE_COMMENT: {
        break;
      }
      case PostActionTypes.CREATE_COMMENT_SUCCESS: {
        const { comment } = action.payload;
        draft.loading = false;
        draft.success = true;
        if (draft.post?.comments)
          draft.post = {
            ...draft.post,
            comments: [...draft.post.comments, comment],
          };

        break;
      }
      case PostActionTypes.UPDATE_SCORE_SUCCESS: {
        const { likes, dislikes } = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.post = {
          ...draft.post!,
          likes: likes,
          dislikes: dislikes,
        };

        break;
      }
      case PostActionTypes.CREATE_POST:
      case PostActionTypes.GET_POST:
      case PostActionTypes.GET_POST_LIST: {
        draft.isDeleted = false;
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
      case PostActionTypes.CREATE_POST_FAILED:
      case PostActionTypes.CREATE_POST_FAILED:
      case PostActionTypes.GET_POST_FAILED:
      case PostActionTypes.GET_POST_LIST_FAILED: {
        const { message } = action.payload;
        draft.loading = false;
        draft.success = false;
        draft.errorMsg = message;
        break;
      }
      case PostActionTypes.DELETE_POST_SUCCESS:{
        draft.isDeleted = true;
        break;
      }
    }
  },
  { ...initialState }
);

export { reducer as postReducer };
