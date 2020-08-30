import React from "react";
import logo from "../../Assets/logo.png";
import { navContent } from "../../Utilities/String";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  //nav for users not logged in
  return (
    <div className="nav">
      <Link to="/">
        <img
          src={logo}
          alt=""
        />
      </Link>
      <Link to="/login">
        <button>{navContent.button}</button>
      </Link>
    </div>
  );
}
