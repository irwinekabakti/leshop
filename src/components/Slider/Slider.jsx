import React from "react";
import { sliderImages } from "../../utils/images";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <div className="hero-slider">
        <div className="hero-slider-item">
          <img src={sliderImages[1]} alt="slider-img-1" />
        </div>
      </div>
    </>
  );
};

export default Slider;
