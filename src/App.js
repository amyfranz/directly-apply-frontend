import React, { Component } from "react";
import { getUser } from "./Utilities/API";
import "./App.css";
import Authorised from "./Containers/AuthorisedRoutes";
import UnAuthorised from "./Containers/UnauthorisedRoutes";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  //saves the user
  state = { user: undefined, isLoading: true };

  //Looks if the user has loggedOn
  componentDidMount() {
    this.checkUser();
  }

  //does a req to the backed to check access to the user
  checkUser = () => {
    if (localStorage.getItem("auth-token")) {
      getUser().then((data) => {
        if (data.user) {
          console.log(data.user);
          this.setState({ user: data.user, isLoading: false });
        }
      });
    } else {
      this.setState({ isLoading: false, user: undefined });
    }
  };

  //logs out a user
  logOutUser = () => {
    localStorage.removeItem("auth-token");
    this.checkUser();
  };

  //does a req to the backed to check access to the user
  setUser = (JWT) => {
    localStorage.setItem("auth-token", JWT);
    this.checkUser();
  };

  render() {
    //has a blank page if loading
    const { user, isLoading } = this.state;
    if (isLoading) {
      return <div className="App"></div>;
    }

    //Logs into the site if a user exists
    return (
      <div className="App">
        {user ? (
          <Authorised user={user} logOutUser={this.logOutUser} />
        ) : (
          <UnAuthorised setUser={this.setUser} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;