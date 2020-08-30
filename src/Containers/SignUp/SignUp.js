import React from "react";
import Form from "../../CommonComponents/Form";
import Joi from "joi-browser";
import { registerUser } from "../../Utilities/API";
import { loginContent } from "../../Utilities/String";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default class SignUp extends Form {
  //input values, errors and selectBox input values
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      findUs: "",
    },
    errors: {},
    findUs: [
      { _id: "linkedin", name: "LinkedIn" },
      { _id: "website", name: "Website" },
      { _id: "socialNetwork", name: "Social Network" },
      { _id: "jobBoard", name: "Job Board" },
    ],
  };

  //input validations
  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.string().required().label("Phone Number").min(8).max(15),
    password: Joi.string().required().label("Password").min(6),
    passwordConfirm: Joi.string()
      .required()
      .label("Password Confirmation")
      .min(6),
    findUs: Joi.string().required().label("Where did you find us?"),
  };

  //registers a user and sets the users data
  onSubmit = (e) => {
    e.preventDefault();
    registerUser(this.state.data)
      .then((data) => {
        data.error
          ? this.setState({ errors: data.error })
          : this.props.setUser(data.jwt);
      })
      .catch();
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.onSubmit}>
          <h2>{loginContent.heading}</h2>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("phone", "Phone Number")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput(
            "passwordConfirm",
            "Password Confirmation",
            "password"
          )}
          {this.renderSelect(
            "findUs",
            "Where did you find us?",
            this.state.findUs
          )}
          {this.state.errors.general ? (
            <p>{this.state.errors.general}</p>
          ) : null}
          {this.renderButton("Register")}
          <p className="changePage">
            Have an account?{" "}
            <Link className="link" to="/login">
              Log In Now.
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
