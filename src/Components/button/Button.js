import React from "react";
import "./button.css";


const Button = (props) => {
    return <button className="btn" onClick={props.draw}>{props.msg}</button>   
}



export default Button