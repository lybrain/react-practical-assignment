import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { createPost } from "../../../store/post/actions";
import { ApplicationState } from "../../../store/root";
import routes from "../../../constants/routes.json";

interface PropsFromState {
  success?: boolean;
  username: string;
}
interface PropsFromDispatch {
  create: typeof createPost.request;
}

const PostCreate = (props: PropsFromState & PropsFromDispatch) => {
  const { create, success, username } = props;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<null | File>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && image) {
      create({ title: title, username: username, image: image });
    }
  };
  useEffect(() => {
    if (success)
      setTimeout(() => {
        navigate(routes.MAIN);
      }, 1000);
  }, [success]);

  return (
    <div className="centered-container h-100">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Example input"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="form-control-file"
            onChange={(event) => {
              const files = event?.target?.files;
              if (files && files.length > 0) setImage(files[0]);
            }}
          />
        </div>
        <button type="submit" className="btn btn-black mt-3">
          Create
        </button>
        <div className="mt-3">
          {success ? (
            <span className="text-success">Succefully created!</span>
          ) : null}
          {!success && success !== undefined ? (
            <span className="text-danger">Failed to create!</span>
          ) : null}
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = ({ post, auth }: ApplicationState) => {
  return {
    success: post.success,
    username: auth.username as string,
  };
};
const mapDispatchToProps = {
  create: createPost.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
