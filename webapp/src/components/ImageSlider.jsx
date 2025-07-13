import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import imageList from "../constants/images";

const ImageSlider = ({ autoPlay = true, delay = 3000 }) => {
  const images = imageList;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, delay);
    return () => clearInterval(timer);
  }, [autoPlay, current, delay, nextSlide]);

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="nav prev">❮</button>
      <img src={images[current]} alt={`Slide ${current}`} className="slide-image" />
      <button onClick={nextSlide} className="nav next">❯</button>
    </div>
  );
};

export default ImageSlider;

