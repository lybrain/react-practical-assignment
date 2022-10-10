import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/loader";
import useInitState from "../../../hooks/useInitState";
import { deletePost, getPost } from "../../../store/post/actions";
import { ApplicationState } from "../../../store/root";
import routes from "../../../constants/routes.json";
import "./post-view.css";
import Comments from "../comments/comments";
import YesNoPopup from "../../../components/yes-no-popup/yes-no-popup";
import Score from "../score/score";

const PostView = () => {
  const { id } = useParams();
  const {
    auth: { username },
    post: { post, loading, isDeleted, errorMsg },
  } = useSelector((state: ApplicationState) => state);
  useInitState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisibility] = useState(false);

  useEffect(() => {
    if (isDeleted) navigate(routes.MAIN);
  }, [isDeleted]);

  useEffect(() => {
    if (id) dispatch(getPost.request({ id: +id }));
    else navigate(routes.MAIN);
  }, []);

  const isOwner = useMemo(() => username === post?.username, [post, username]);

  const onDelete = () => {
    if (isOwner)
      dispatch(
        deletePost.request({
          id: +id!,
        })
      );
  };

  if (loading || !post)
    return (
      <div className="centered-container">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="centered-container">
        <div className="edit-menu">
          {isOwner ? (
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={() => setModalVisibility(true)}
            >
              Delete
            </button>
          ) : null}
        </div>

        <h1>{post?.title}</h1>
        <div className="side-paddings centered-container">
          <img
            className="article-picture mt-4"
            src={post?.imageSrc}
            alt="article-img"
          />
          <p className="mt-4">{post?.username}</p>
          <Score post={post!} username={username!} />
        </div>
      </div>
      <Comments
        comments={post?.comments}
        username={username!}
        postId={post?.id!}
      />
      <YesNoPopup
        title="Are you sure ?"
        onSubmit={onDelete}
        onDecline={() => setModalVisibility(false)}
        isVisible={isModalVisible}
      />
    </>
  );
};
export default PostView;
