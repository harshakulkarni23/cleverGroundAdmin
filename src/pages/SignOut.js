import React from "react";
// import * as ROUTES from "./routes";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authAction";

const SignOutButton = ({ history, logout }) => {
  function onSubmit(e) {
    e.preventDefault();
    logout(history);
  }

  return (
    <button
      type="button"
      className="btn btn-danger btn-sm pull-right"
      onClick={onSubmit}
    >
      Sign Out
    </button>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default compose(
  connect(null, mapDispatchToProps),
  withRouter
)(SignOutButton);
