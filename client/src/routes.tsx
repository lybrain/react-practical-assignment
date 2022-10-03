import React from "react";

import {
  Routes as Switch,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Login from "./pages/login/login";
import Main from "./pages/main";
import NotFound from "./pages/not-found/not-found";
import routes from "./constants/routes.json";
import ErrorBoundry from "./components/error-boundry/error-boundry";

export default function AppRoutes(props: { isAuthenticated: boolean }) {
  const { isAuthenticated } = props;
  return (
    <Router>
      <ErrorBoundry>
        <Switch>
          <Route
            path={routes.LOGIN}
            element={<Login isAuthenticated={isAuthenticated} />}
          />
          <Route
            path={"/*"}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Main />
              </ProtectedRoute>
            }
          ></Route>

          <Route element={<NotFound />} />
        </Switch>
      </ErrorBoundry>
    </Router>
  );
}
