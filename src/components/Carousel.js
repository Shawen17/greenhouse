import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % props.slides.length);
    }, props.interval);

    return () => clearInterval(slideInterval);
  }, [currentSlide, props.interval, props.slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % props.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + props.slides.length) % props.slides.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {props.slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
