import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import routes from "../../constants/routes.json";
import PostCreate from "../post/create/post-create";
import PostList from "../post/list/post-list";
import PostView from "../post/view/post-view";
import "./main.css";

const Main = () => {
  return (
    <>
      <Switch>
        <Route path={routes.MAIN} element={<PostList />} />
        <Route path={routes.CREATE} element={<PostCreate />} />
        <Route path={`${routes.VIEW}/:id`} element={<PostView />} />
        <Route path="*" element={<Navigate to={routes.MAIN} replace />} />
      </Switch>
    </>
  );
};
export default Main;
