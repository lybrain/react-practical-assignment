import React, { Component } from "react";
import withRouter from "../with-router/with-router";

type Props = {
  history: any;
  children: any;
};
type State = {
  hasError: boolean;
};
class ErrorBoundry extends Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
    const history = this.props.history;

    window.onunload = function (params) {
      history.replace({ pathname: `/error` });
      window.history.replaceState(null, "Ошибка", "/error");
    };
  }
  render() {
    return this.state.hasError ? (
      <div className="centered-container h-100">
        <h1>Something goes wrong ...</h1>
      </div>
    ) : (
      this.props.children
    );
  }
}
export default withRouter(ErrorBoundry);
