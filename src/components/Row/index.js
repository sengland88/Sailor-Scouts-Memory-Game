import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} text-center`}  {...props} />;
}

export default Row;
