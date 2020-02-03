import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// import * as ROUTES from "./routes";

const SignUpPage = () => (
  <div className="text-center">
    <h1>SignUp</h1>
    {<SignUpForm />}
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    const { email, username } = this.state;
    let userData = { email, username };

    this.setState({ ...INITIAL_STATE });
    this.props.history.push("/", { userData });
    //     });
    // })
    // .catch(error => {
    //   this.setState({ error });
    // });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    // const isInvalid =
    //   passwordOne !== passwordTwo ||
    //   passwordOne === "" ||
    //   passwordOne.length < 6 ||
    //   email === "" ||
    //   username === "";

    return (
      <form className="px-5" style={{ width: "600px", margin: "20px auto" }}>
        <div className="form-group">
          <input
            className="form-control"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
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
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          onClick={this.onSubmitHandler.bind(this)}
        >
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"/signup"}>Sign Up</Link>
  </p>
);

SignUpForm = compose(withRouter)(SignUpForm);

export default SignUpPage;
export { SignUpForm, SignUpLink };
