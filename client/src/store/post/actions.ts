import { createAsyncAction } from "typesafe-actions";
import {
  CreatePostArgs,
  CreatePostFailedArgs,
  CreatePostSuccessArgs,
  GetPostListArgs,
  GetPostListFailArgs,
  GetPostListSuccessArgs,
  PostActionTypes,
} from "./types";

export const createPost = createAsyncAction(
  PostActionTypes.CREATE_POST,
  PostActionTypes.CREATE_POST_SUCCESS,
  PostActionTypes.CREATE_POST_FAILED
)<CreatePostArgs, CreatePostSuccessArgs, CreatePostFailedArgs>();

export const getPostList = createAsyncAction(
  PostActionTypes.GET_POST_LIST,
  PostActionTypes.GET_POST_LIST_SUCCESS,
  PostActionTypes.GET_POST_LIST_FAILED
)<GetPostListArgs, GetPostListSuccessArgs, GetPostListFailArgs>();
