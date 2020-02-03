import React, { Component } from "react";
import { login } from "../redux/actions/authAction";
import { Link } from "react-router-dom";
// import * as ROUTES from "./routes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const INITIAL_STATE = {
  email: "test@gmail.com",
  password: "123456",
  errors: null
};

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth !== this.props.auth) {
      this.setState({
        errors: nextProps.auth.errors
      });
    }
  }

  onSubmit = event => {
    let data = { email: this.state.email, password: this.state.password };
    this.setState({
      loading: true
    });
    this.props.login(data, this.props.history);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  gotosignup() {
    this.props.history.push("/signup");
  }

  render() {
    const { email, password, errors } = this.state;
    const {
      auth: { loading }
    } = this.props;
    const isInvalid = password === "" || email === "";
    return (
      <div className="text-center" style={{ marginTop: "50px" }}>
        <h1>SignIn</h1>

        <div className="form-group">
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        {errors && <p className="text-danger my-2">{errors.message}</p>}
        <button
          disabled={isInvalid}
          className="btn btn-success position-relative"
          type="submit"
          onClick={this.onSubmit}
        >
          Sign In
          {loading ? (
            <div
              className="spinner-border text-light position-absolute"
              style={{ left: "25%", top: "0" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : null}
        </button>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} onClick={this.gotosignup.bind(this)}>
            Sign Up
          </Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
