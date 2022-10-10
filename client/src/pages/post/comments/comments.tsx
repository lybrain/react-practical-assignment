import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Comment from "../../../core/models/comment";
import { createComment } from "../../../store/post/actions";

interface Props {
  comments?: Comment[];
  username: string;
  postId: number;
}

const Comments = ({ comments, username, postId }: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onAddNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text && text.length > 0)
      dispatch(
        createComment.request({
          postId: postId,
          text: text,
          username: username,
        })
      );
    setText(""); // TODO: onSuccess
  };
  return (
    <div className="side-paddings mt-4">
      <h1 className="centered-container">Comments: </h1>
      <form onSubmit={onAddNewComment}>
        <div className="form-group">
          <input
            name="text"
            className="form-control"
            id="fieldTitle"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter comment"
          ></input>
        </div>
        <div className="form-group centered-container">
          <button type="submit" className="btn btn-primary">
            Add comment
          </button>
        </div>
      </form>
      <div>
        {comments?.map((comment) => (
          <div key={comment.id}>
            <hr />
            <div className="comment-date">
              <span>
                <h6>{comment.username}</h6>
              </span>
            </div>

            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments;
