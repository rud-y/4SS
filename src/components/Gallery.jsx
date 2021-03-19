import React from "react";
import '../styles/Gallery.css';
import one from "../images/gallery/1.jpg";
import two from "../images/gallery/2.jpg";
import three from "../images/gallery/3.jpg";


export default function Gallery() {

  return (
    <div className="gallery-wrapper">
      <h5 className="top-heading">Local picture gallery for inspirations</h5>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mx-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={one} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide labe</h5>
              <p>Some placeholder content.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={two} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some placeholder content.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some placeholder content.</p>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img src="../images/gallery/4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>Some placeholder content.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/gallery/5.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fifth slide label</h5>
              <p>Some placeholder content.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/gallery/6.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sixth slide label</h5>
              <p>Some placeholder content.</p>
            </div>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">PREVIOUS</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden">NEXT</span>
        </button>
      </div>
    </div>
  )
}