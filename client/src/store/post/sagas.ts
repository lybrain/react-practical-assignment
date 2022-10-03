import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { CreatePostArgs, GetPostListArgs, PostActionTypes } from "./types";
import {
  createPost as createPostApi,
  getPostList as getListApi,
} from "../../services/api";
import { createPost, getPostList } from "./actions";

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

function* postSaga() {
  yield all([
    takeLatest(PostActionTypes.CREATE_POST, handleCreatePost),
    takeLatest(PostActionTypes.GET_POST_LIST, handleGetPostList),
  ]);
}
export default postSaga;
