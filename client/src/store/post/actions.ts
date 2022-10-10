import { createAsyncAction, createCustomAction } from "typesafe-actions";
import {
  CreatePostArgs,
  FailedArgs,
  CreatePostSuccessArgs,
  IdArgs,
  GetPostListArgs,
  GetPostListSuccessArgs,
  PostActionTypes,
  CreateCommentArgs,
  CreateCommentSuccessArgs,
  ScoreArgs,
  UpdateScoreSuccessArgs,
} from "./types";

export const createPost = createAsyncAction(
  PostActionTypes.CREATE_POST,
  PostActionTypes.CREATE_POST_SUCCESS,
  PostActionTypes.CREATE_POST_FAILED
)<CreatePostArgs, CreatePostSuccessArgs, FailedArgs>();

export const createComment = createAsyncAction(
  PostActionTypes.CREATE_COMMENT,
  PostActionTypes.CREATE_COMMENT_SUCCESS,
  PostActionTypes.CREATE_COMMENT_FAILED
)<CreateCommentArgs, CreateCommentSuccessArgs, FailedArgs>();

export const getPostList = createAsyncAction(
  PostActionTypes.GET_POST_LIST,
  PostActionTypes.GET_POST_LIST_SUCCESS,
  PostActionTypes.GET_POST_LIST_FAILED
)<GetPostListArgs, GetPostListSuccessArgs, FailedArgs>();

export const getPost = createAsyncAction(
  PostActionTypes.GET_POST,
  PostActionTypes.GET_POST_SUCCESS,
  PostActionTypes.GET_POST_FAILED
)<IdArgs, CreatePostSuccessArgs, FailedArgs>();

export const updateScore = createAsyncAction(
  PostActionTypes.UPDATE_SCORE,
  PostActionTypes.UPDATE_SCORE_SUCCESS,
  PostActionTypes.UPDATE_SCORE_FAILED
)<ScoreArgs, UpdateScoreSuccessArgs, FailedArgs>();

export const deletePost = createAsyncAction(
  PostActionTypes.DELETE_POST,
  PostActionTypes.DELETE_POST_SUCCESS,
  PostActionTypes.DELETE_POST_FAILED
)<IdArgs, {}, FailedArgs>();


export const initPostState = createCustomAction(PostActionTypes.INIT_STATE);
