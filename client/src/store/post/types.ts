import Post from "../../core/models/post";
import Comment from "../../core/models/comment";

export const enum PostActionTypes {
  INIT_STATE = "@@post/INIT",

  GET_POST = "@@post/GET_POST",
  GET_POST_SUCCESS = "@@post/GET_POST_SUCCESS",
  GET_POST_FAILED = "@@post/GET_POST_FAILED",

  GET_POST_LIST = "@@post/GET_POST_LIST",
  GET_POST_LIST_SUCCESS = "@@post/GET_POST_LIST_SUCCESS",
  GET_POST_LIST_FAILED = "@@post/GET_POST_LIST_FAILED",

  CREATE_POST = "@@post/CREATE_POST",
  CREATE_POST_SUCCESS = "@@post/CREATE_POST_SUCCESS",
  CREATE_POST_FAILED = "@@post/CREATE_POST_FAILED",

  EDIT_POST = "@@post/EDIT_POST",
  EDIT_POST_SUCCESS = "@@post/EDIT_POST_SUCCESS",
  EDIT_POST_FAILED = "@@post/EDIT_POST_FAILED",

  DELETE_POST = "@@post/DELETE_POST",
  DELETE_POST_SUCCESS = "@@post/DELETE_POST_SUCCESS",
  DELETE_POST_FAILED = "@@post/DELETE_POST_FAILED",

  CREATE_COMMENT = "@@post/CREATE_COMMENT",
  CREATE_COMMENT_SUCCESS = "@@post/CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILED = "@@post/CREATE_COMMENT_FAILED",

  DELETE_COMMENT = "@@post/DELETE_COMMENT",
  DELETE_COMMENT_SUCCESS = "@@post/DELETE_COMMENT_SUCCESS",
  DELETE_COMMENT_FAILED = "@@post/DELETE_COMMENT_FAILED",

  UPDATE_SCORE = "@@post/UPDATE_SCORE",
  UPDATE_SCORE_SUCCESS = "@@post/UPDATE_SCORE_SUCCESS",
  UPDATE_SCORE_FAILED = "@@post/UPDATE_SCORE_FAILED",
}

export interface PostState {
  readonly list: Post[];
  readonly post?: Post;
  readonly loading: boolean;
  readonly errorMsg?: string;
  readonly success?: boolean;
  readonly isDeleted?: boolean;
}

export interface IdArgs {
  readonly id: number;
}
export interface GetPostListArgs {
  readonly page: number;
}
export interface GetPostListSuccessArgs {
  readonly posts: Post[];
}

export interface CreatePostArgs {
  readonly title: string;
  readonly username: string;
  readonly image: any;
}
export interface CreatePostSuccessArgs {
  readonly post: Post;
}
export interface UpdateScoreSuccessArgs {
  readonly likes: string[];
  readonly dislikes: string[];
}
export interface CreateCommentSuccessArgs {
  readonly comment: Comment;
}
export interface FailedArgs {
  readonly message: string;
}

export interface ScoreArgs {
  readonly post: Post;
  readonly username: string;
  readonly isLike: boolean;
}
export interface CreateCommentArgs {
  readonly postId: number;
  readonly text: string;
  readonly username: string;
}
