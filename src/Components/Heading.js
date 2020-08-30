import React from "react";
import { homeContent } from "../Utilities/String";

export default function Heading() {
  //main heading
  return (
    <div className="unAuthHeading">
      <h2>
        <span>{homeContent.underlineText1}</span>
        {homeContent.text1}
      </h2>
      <h2>
        {homeContent.text2}
        <span>{homeContent.underlineText2}</span>
      </h2>
      <h5>
        {homeContent.text3}
        <a href="https://uk.directlyapply.com/hire">{homeContent.linkText}</a>
      </h5>
    </div>
  );
}
