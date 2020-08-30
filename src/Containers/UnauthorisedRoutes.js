import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import UnAuthHome from "./UnauthHome/UnauthHome";
import Nav from "../Components/Nav/Nav";

//creates routes for users who have not logged in

export default function UnAuthorised(props) {
  return (
    <div>
      <Nav history={props.history} />
      <Switch>
        <Route
          exact
          path="/login"
          render={() => <Login setUser={props.setUser} />}
        ></Route>
        <Route
          exact
          path="/signup"
          render={() => <SignUp setUser={props.setUser} />}
        ></Route>
        <Route exact path="/" render={() => <UnAuthHome />}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
