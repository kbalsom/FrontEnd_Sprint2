// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import functions, and stylesheet
import React, { useState } from "react";
import "../stylesheets/ImageSlider.css";
import { Slider } from "./Slider";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

//Set up ImageSlider Function
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //Set up nextSlide/ prevSlide functions
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {Slider.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div id="slider">
                <img src={slide.image} alt="work" className="image" />
                {slide.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

//Export ImageSlider Function
export default ImageSlider;
