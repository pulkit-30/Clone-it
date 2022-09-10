import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner6.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner5.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="./banner1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="fade-box"></div>
    </div>
  );
}

export default Banner;
