import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageSlider = ({ images, imageContainerStyle = {}, timer = 3000, showArrows = false }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (images.length > 0 ? (prevIndex + 1) % images.length : 0));
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container" style={{ ...imageContainerStyle, position: "relative" }}>
      {images.length > 1 && showArrows && <FaArrowLeft className="arrow-icon left" onClick={() => setIndex((prevIndex) => (images.length > 0 ? (prevIndex - 1) % images.length : 0))} />}
      {images.map((image, idx) => (
        <img key={idx} src={image} alt={`Slide ${idx + 1}`} className={idx === index ? "slide active" : "slide"} />
      ))}
      {images.length > 1 && showArrows && <FaArrowRight className="arrow-icon right" onClick={() => setIndex((prevIndex) => (images.length > 0 ? (prevIndex + 1) % images.length : 0))} />}
    </div>
  );
};

export default ImageSlider;
