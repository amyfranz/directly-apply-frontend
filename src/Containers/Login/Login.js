import React from "react";
import Joi from "joi-browser";
import Form from "../../CommonComponents/Form";
import { logInUser } from "../../Utilities/API";
import { loginContent } from "../../Utilities/String";
import "./Login.css";
import { Link } from "react-router-dom";

export default class login extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  //validates form
  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password").min(6),
  };

  //shows the form
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h2>{loginContent.heading}</h2>
          {this.renderInput("email", "Email:")}
          {this.renderInput("password", "Password:", "password")}
          {this.state.errors.general ? (
            <p>{this.state.errors.general}</p>
          ) : null}
          {this.renderButton("Login")}
          <p className="changePage">
            Don't have an account?{" "}
            <Link className="link" to="/signup">
              Sign Up Now.
            </Link>
          </p>
        </form>
      </div>
    );
  }

  //submits the form
  doSubmit = () => {
    const { email, password } = this.state.data;
    logInUser({ email, password })
      .then((data) => {
        data.error
          ? this.setState({ errors: data.error })
          : this.props.setUser(data.jwt);
      })
      .catch((error) => console.log("error", error));
  };
}
