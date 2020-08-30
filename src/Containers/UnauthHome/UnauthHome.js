import React from "react";
import Heading from "../../Components/Heading";
import JobTypes from '../../Components/JobTypes';
import "./UnauthHome.css"

export default function UnAuthHome() {
  return (
    <div className="unauthHome">
      <Heading />
      <JobTypes />
    </div>
  );
}
