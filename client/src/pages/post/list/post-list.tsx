import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/loader";
import Post from "../../../core/models/post";
import useInitState from "../../../hooks/useInitState";
import { getPostList } from "../../../store/post/actions";
import { ApplicationState } from "../../../store/root";
import routes from "../../../constants/routes.json";
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
  const navigate = useNavigate();
  useInitState();
  const { success, list, getList, loading } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    getList({ page: page });
  }, []);

  const onPostClick = (id: number) => {
    navigate(`${routes.VIEW}/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="album py-5">
          <div className="container">
            <div className="row">
              {success &&
                list.map(({ id, username, title, imageSrc }) => {
                  return (
                    <div
                      className="col-md-4"
                      key={id}
                      onClick={() => id && onPostClick(id)}
                    >
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
