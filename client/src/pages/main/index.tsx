import React from "react";
import {
  Routes as Switch,
  Route,
} from "react-router-dom";
import routes from "../../constants/routes.json";
import PostCreate from "../post/create/post-create";
import PostList from "../post/list/post-list";
import "./main.css";

const Main = () => {
  return (
    <>
      <Switch>
        <Route path={routes.MAIN} element={<PostList />} />
        <Route path={routes.CREATE} element={<PostCreate />} />
      </Switch>
    </>
  );
};
export default Main;
