import Post from "../../core/models/post";

export const enum PostActionTypes {
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
}
export interface PostState {
  readonly list: Post[];
  readonly post?: Post;
  readonly loading: boolean;
  readonly error?: string;
  readonly success?: boolean;
}

export interface GetPostArgs {
  readonly id: string;
}
export interface GetPostListArgs {
  readonly page: number;
}
export interface GetPostListSuccessArgs {
  readonly posts: Post[];
}
export interface GetPostListFailArgs {
  readonly error: string;
}
export interface CreatePostArgs {
  readonly title: string;
  readonly username: string;
  readonly image: any;
}
export interface CreatePostSuccessArgs {
  readonly post: Post;
}
export interface CreatePostFailedArgs {
  readonly message: string;
}
