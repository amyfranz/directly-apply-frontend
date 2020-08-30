import React from "react";
import logo from "../../Assets/logo.png";
import { navAuthContent } from "../../Utilities/String";

export default function AuthNav({ logOutUser }) {
  //Nav for users that are logged in
  return (
    <div className="nav">
      <img src={logo} alt="" onClick={() => {}} />
      <button
        onClick={() => {
          logOutUser();
        }}
      >
        {navAuthContent.button}
      </button>
    </div>
  );
}
