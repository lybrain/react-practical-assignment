import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./login.css";
import { login as loginAction } from "../../store/auth/actions";
import routes from "../../constants/routes.json";
import storage from "../../constants/storage.json";

interface OwnProps {
  isAuthenticated: boolean;
}
interface PropsFromDispatch {
  login: typeof loginAction;
}
type Props = OwnProps & PropsFromDispatch;

const Login = (props: Props) => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = props;
  const [loginValue, setLoginValue] = useState<string>("");

  useEffect(() => {
    if (isAuthenticated) return navigate(routes.MAIN);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginValue) {
      localStorage.setItem(storage.LOGIN, loginValue);
      login({ username: loginValue });
      navigate(routes.MAIN);
    }
  };

  return (
    <div className="centered-container h-100">
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>

          <button type="submit" className="btn btn-black mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(Login);
