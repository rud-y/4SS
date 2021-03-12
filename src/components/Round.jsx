import "../styles/Round.css";
import React from 'react';
import seal from "../images/seal.jpg";

const Round = (props) => {
    return (
        <div className="round-pic-div">
            <h5>{props.name}</h5>
            <img className="round-pic" src={seal} alt="A seal"></img>
        </div>)
}

export default Round;