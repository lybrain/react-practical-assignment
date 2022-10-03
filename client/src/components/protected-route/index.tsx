import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../../constants/routes.json";

type Props = {
  isAuthenticated: boolean;
  children: any;
};
const ProtectedRoute = (props: Props) => {
  const { isAuthenticated, children } = props;
  if (!isAuthenticated) {
    return <Navigate to={routes.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
