import React from "react";
import "./style.css";

function ScoutCard(props) {
  console.log(props)

  return (

    <img onClick={() => props.imageClick(props.id, props.name)} className="rounded imageBorder" src={props.image} key={props.id}/>
  );
}

export default ScoutCard;