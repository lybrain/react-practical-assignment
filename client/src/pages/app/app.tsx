import React from "react";
import AppRoutes from "../../routes";
import { connect } from "react-redux";
import { ApplicationState } from "../../store/root";
import routes from "../../constants/routes.json";
import storage from "../../constants/storage.json";
import "./app.css";
import { logout } from "../../store/auth/actions";

interface PropsFromState {
  isAuthenticated: boolean;
  username?: string | null;
}
interface PropsFromDispatch {
  logout: typeof logout;
}

function App({
  isAuthenticated,
  username,
  logout,
}: PropsFromState & PropsFromDispatch) {
  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a
              href={routes.MAIN}
              className="navbar-brand d-flex align-items-center"
            >
              <strong>Blog</strong>
            </a>
            {isAuthenticated ? (
              <>
                <a
                  href={routes.CREATE}
                  className="navbar-brand d-flex align-items-center"
                >
                  <button type="button" className="btn btn-light btn-sm">
                    New post
                  </button>
                </a>
                <span>
                  <span className="text-white header__login-name">{username}</span>
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => {
                      localStorage.removeItem(storage.LOGIN);
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </span>
              </>
            ) : null}
          </div>
        </div>
      </header>
      <main className="main">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </main>
    </>
  );
}
const mapStateToProps = ({ auth }: ApplicationState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    username: auth.username,
  };
};
const mapDispatchToProps = {
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
