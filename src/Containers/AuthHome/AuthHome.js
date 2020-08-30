import React from "react";
import "./AuthHome.css";

export default function AuthHome({ user }) {
  return (
    <div className="authHome">
      <div className="robo"> {/* renders the robot*/}
        <input type="checkbox" id="switch-button" />
        <label htmlFor="switch-button">
          <div className="switch"></div>
        </label>
        <div className="face"></div>
        <div className="head"></div>
        <input type="checkbox" id="fly-button" />
        <label htmlFor="fly-button">
          <div className="body"></div>
        </label>
        <div className="left"></div>
        <div className="right"></div>
        <div className="eye1"></div>
        <div className="eye2"></div>
        <div className="fly-wave">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="background"></div>
      </div>
      <h2>Hello {user.name}, Let's find a job!</h2> {/* renders the writing*/}
    </div>
  );
}
