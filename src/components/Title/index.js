import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="titleDiv">
      <div className="text-center">
      <p>{props.message}</p>
      <span className="theTitle score">Current Score: {props.score} || Top Score: {props.topscore}</span>
      </div>
    </div>
  );
}

export default Title;