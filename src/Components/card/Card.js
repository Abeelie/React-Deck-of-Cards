import React from "react";
import "./card.css";


const Card = (props) => {
  return <img className="card" src={props.image} alt={props.name}/>;
}



export default Card