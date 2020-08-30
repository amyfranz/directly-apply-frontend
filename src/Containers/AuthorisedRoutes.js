import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthHome from "./AuthHome/AuthHome";
import AuthNav from "../Components/AuthNav/AuthNav";

export default function Authorised({ user, logOutUser }) {
  //creates routes for users who are logged in
  return (
    <div>
      <AuthNav logOutUser={logOutUser} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AuthHome user={user} />}
        ></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
