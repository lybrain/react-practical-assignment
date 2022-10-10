import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import Post from "../../../core/models/post";
import { updateScore } from "../../../store/post/actions";

interface Props {
  post: Post;
  username: string;
}

const Score = (props: Props) => {
  const dispatch = useDispatch();
  const { post, username } = props;
  const { likes, dislikes } = post;

  const isLiked = useMemo(() => likes?.includes(username), [username, likes]);

  const isDisliked = useMemo(
    () => dislikes?.includes(username),
    [username, dislikes]
  );
  const sendScore = (isLike: boolean) =>
    dispatch(updateScore.request({ isLike, post: post, username: username }));
    
  const onLikeClick = () => sendScore(true);
  const onDislikeClick = () => sendScore(false);

  return (
    <div className="mt-2 post__eval-container">
      <button onClick={onLikeClick}>
        <i className={`bi bi-hand-thumbs-up${isLiked ? "-fill" : ""}`}></i>
        <span>{likes?.length}</span>
      </button>
      <button onClick={onDislikeClick}>
        <i className={`bi bi-hand-thumbs-down${isDisliked ? "-fill" : ""}`}></i>
        <span>{dislikes?.length}</span>
      </button>
    </div>
  );
};
export default Score;
