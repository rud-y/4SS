import React from "react";
import '../styles/Gallery.css';
import one from "../images/gallery/squeensferry.jpg";
import two from "../images/gallery/portobello1.jpg";
import three from "../images/gallery/portobello2.jpg";
import four from "../images/gallery/newhavenWinter.jpg";
import five from "../images/gallery/portobelloSnow.jpg";
import six from "../images/gallery/westernHarbour.jpg";
import Round from "./Round";


export default function Gallery() {

  return (
    <div className="gallery-wrapper">
      <h5 className="top-heading">Edinburgh inspirations</h5>
      <Round className="logo" />
      <div id="carouselExampleDark" className="carousel carousel-dark slide mx-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={one} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>South Queensferry</h5>
              <p>In between the bridges.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={two} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Portobello Beach</h5>
              <p>Near the promenade.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Portobello Beach</h5>
              <p>Very north part.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={four} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Newhaven</h5>
              <p>Near the Newhaven lighthouse in February.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={five} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Portobello</h5>
              <p>February snow leftover.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={six} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Western Harbour</h5>
              <p>Near Platinum Point.</p>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
  )
}