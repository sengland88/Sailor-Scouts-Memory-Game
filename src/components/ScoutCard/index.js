import React from "react";
import "./style.css";

function ScoutCard(props) {
  return (

    <img onClick={() => props.imageClick(props.id, props.name)} className="rounded imageBorder" src={props.image} alt={props.name} key={props.id}/>
  );
}

export default ScoutCard;