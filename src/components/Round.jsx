import "../styles/Round.css";
import React from 'react';
import seal from "../images/seal.jpg";

const Round = () => {
    return (
        <div className="round-pic-div">
            <img className="round-pic" src={seal} alt="A seal"></img><span><h3 className="top-heading">Jump in, no matter the season!</h3></span>
        </div>)
}

export default Round;