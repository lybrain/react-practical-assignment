import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  CreateCommentArgs,
  CreatePostArgs,
  IdArgs,
  GetPostListArgs,
  PostActionTypes,
  ScoreArgs,
} from "./types";
import {
  createComment as createCommentApi,
  createPost as createPostApi,
  deletePost as deletePostApi,
  getPost as getPostApi,
  getPostList as getListApi,
  updatePost as updatePostApi,
} from "../../services/api";
import {
  createComment,
  createPost,
  deletePost,
  getPost,
  getPostList,
  updateScore,
} from "./actions";
import { addRemoveByKey } from "../../utils/api-utils";

function* handleCreatePost(action: any): any {
  const { title, username, image } = action.payload as CreatePostArgs;
  try {
    const post = yield call(createPostApi, title, username, image);

    yield put(
      createPost.success({
        post,
      })
    );
  } catch (e: any) {
    yield put(
      createPost.failure({
        message: e.message,
      })
    );
  }
}
function* handleGetPostList(action: any): any {
  const { page } = action.payload as GetPostListArgs;
  try {
    const data = yield call(getListApi, page);

    yield put(
      getPostList.success({
        posts: data,
      })
    );
  } catch (e: any) {
    yield put(
      createPost.failure({
        message: e.message,
      })
    );
  }
}
function* handleGetPost(action: any): any {
  const { id } = action.payload as IdArgs;
  try {
    const data = yield call(getPostApi, id);

    yield put(
      getPost.success({
        post: data,
      })
    );
  } catch (e: any) {
    yield put(
      getPost.failure({
        message: e.message,
      })
    );
  }
}
function* handleDeletePost(action: any): any {
  const { id } = action.payload as IdArgs;
  try {
    yield call(deletePostApi, id);

    yield put(deletePost.success({}));
  } catch (e: any) {
    yield put(
      deletePost.failure({
        message: e.message,
      })
    );
  }
}
function* handleCreateComment(action: any): any {
  try {
    const data = yield call(
      createCommentApi,
      action.payload as CreateCommentArgs
    );

    yield put(
      createComment.success({
        comment: data,
      })
    );
  } catch (e: any) {
    yield put(
      createComment.failure({
        message: e.message,
      })
    );
  }
}
function* handleLikeDislikePost(action: any): any {
  const { isLike, post, username } = action.payload as ScoreArgs;
  const dataToSend = { ...post };
  let likes;
  let dislikes;
  if (isLike) {
    [likes, dislikes] = addRemoveByKey(username, post.likes, post.dislikes);
  } else {
    [dislikes, likes] = addRemoveByKey(username, post.dislikes, post.likes);
  }
  dataToSend.likes = likes;
  dataToSend.dislikes = dislikes;
  try {
    const data = yield call(updatePostApi, dataToSend);

    yield put(
      updateScore.success({
        likes: data.likes,
        dislikes: data.dislikes,
      })
    );
  } catch (e: any) {
    yield put(
      updateScore.failure({
        message: e.message,
      })
    );
  }
}

function* postSaga() {
  yield all([
    takeLatest(PostActionTypes.GET_POST, handleGetPost),
    takeLatest(PostActionTypes.CREATE_POST, handleCreatePost),
    takeLatest(PostActionTypes.GET_POST_LIST, handleGetPostList),
    takeLatest(PostActionTypes.CREATE_COMMENT, handleCreateComment),
    takeLatest(PostActionTypes.UPDATE_SCORE, handleLikeDislikePost),
    takeLatest(PostActionTypes.DELETE_POST, handleDeletePost),
  ]);
}
export default postSaga;
