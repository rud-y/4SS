import React from "react";
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">4 SEASON DIP</Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavBar">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/places">Places</Link>
            <Link class="nav-link" to="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>

  );
};
export default NavBar;
