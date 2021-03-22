import React from "react";
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">4 SEASON DIP</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/places">Places</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>

  );
};
export default NavBar;
