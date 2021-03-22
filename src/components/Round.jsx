import "../styles/Round.css";
import React from 'react';
import seal from "../images/seal.jpg";

const Round = () => {
    return (
        <div className="round-pic-div">
            <img className="round-pic sticky-top" src={seal} alt="A seal"></img>

        </div>)
}

export default Round;