import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Post from "../../../core/models/post";
import { getPostList } from "../../../store/post/actions";
import { ApplicationState } from "../../../store/root";
import "./post-list.css";

interface PropsFromState {
  success?: boolean;
  list: Post[];
  loading: boolean;
}
interface PropsFromDispatch {
  getList: typeof getPostList.request;
}
const PostList = (props: PropsFromState & PropsFromDispatch) => {
  const { success, list, getList, loading } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    getList({ page: page });
  }, []);

  return (
    <>
      {loading ? (
        <div className="centered-container h-100">
          <div className="spinner-border " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="album py-5">
          <div className="container">
            <div className="row">
              {success &&
                list.map(({ id, username, title, imageSrc }) => {
                  return (
                    <div className="col-md-4" key={id}>
                      <div className="card mb-4 box-shadow">
                        <img
                          className="card-img-top post-list__img"
                          alt="Image"
                          src={imageSrc}
                        />
                        <div className="card-body">
                          <p className="card-text">{title}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group"></div>
                            <small className="text-muted">{username}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {/* <nav aria-label="Page navigation " className="centered-container">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
        </ul>
      </nav> */}
    </>
  );
};
const mapStateToProps = ({ post }: ApplicationState) => {
  return {
    success: post.success,
    list: post.list,
    loading: post.loading,
  };
};
const mapDispatchToProps = {
  getList: getPostList.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
