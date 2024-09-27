import React from "react";
import "./Carousel.css";
import sullen from "./img/sullen.png";
// import pent from "./img/pent.jpg";
//prueba *

function Carousel() {
  
  return (
    <>
      <div className="container-fluid mt-3 w-75">
        <div
          id="carouselExampleControls"
          className="carousel slide justify-content-start"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card text-center">
                <img
                  src={sullen}
                  class="d-block w-100"
                  alt="..."
                  id="carouselImg"
                />
                <div className="card-body">
                  <h5 className="card-title">Sullen Sense</h5>
                  <p className="card-text">Vicio Music.</p>
                  <a href="https://soundcloud.com/sullen-sense" className="btn btn-primary">Listen</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
              <img
                src={sullen}
                className="d-block w-100"
                alt="..."
                id="carouselImg"
              />
              <div className="card-body">
                <h5 className="card-title">He Walks, He's Coming</h5>
                <p className="card-text">Sullen Sense</p>
                <a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" className="btn btn-primary">Listen</a>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
              <img
                src={sullen}
                className="d-block w-100"
                alt="..."
                id="carouselImg"
              />
              <div className="card-body">
                <h5 className="card-title">Impera</h5>
                <p className="card-text">Sullen Sense</p>
                <a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" className="btn btn-primary">Listen</a>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
              <img
                src={sullen}
                class="d-block w-100"
                alt="..."
                id="carouselImg"
              />
              <div className="card-body">
                <h5 className="card-title">Cyberia</h5>
                <p className="card-text">Sullen Sense</p>
                <a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" className="btn btn-primary">Listen</a>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
              <img
                src={sullen}
                className="d-block w-100"
                alt="..."
                id="carouselImg"
              />
              <div className="card-body">
                <h5 className="card-title">Dark Energy, Dark Beers!</h5>
                <p className="card-text">Sullen Sense</p>
                <a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" className="btn btn-primary">Listen</a>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-center">
              <img
                src={sullen}
                className="d-block w-100"
                alt="..."
                id="carouselImg"
              />
              <div className="card-body">
                <h5 className="card-title">Lion Bass</h5>
                <p className="card-text">Sullen Sense</p>
                <a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" className="btn btn-primary">Listen</a>
              </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export { Carousel };
