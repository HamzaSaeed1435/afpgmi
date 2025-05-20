import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./gallery.css";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const location = useLocation();
  const images = Object.keys(location.state)?.length;

  const nextImage = () => {
    setCurrentIndex(currentIndex === images ? 1 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 1 ? images : currentIndex - 1);
  };











  return (
    <div className="image-gallery-container">
      <div className="slider" style={{ position: "relative" }}>
        <FaArrowLeft className="arrow-icon left" onClick={prevImage} />
        <img src={location?.state[currentIndex]?.img} alt={`Image ${currentIndex + 1}`} />{" "}
        <FaArrowRight className="arrow-icon right" onClick={nextImage} />








      </div>
      <h2 className="img-title " style={{fontSize: "50px", textTransform: "uppercase", marginBottom: 20}} >{location?.state[currentIndex]?.title}</h2>

      <div className="thumbnails">
        {Object.keys(location?.state)?.map((key, index) => (
          <img style={{width: "100%"}} key={index} src={location?.state[key]?.img} alt={`Thumbnail ${index + 1}`} className={currentIndex === index + 1 ? "imageSelected" : "imageUnSelected"} onClick={() => setCurrentIndex(index + 1)} />
        ))}









      </div>

      <br />
      <br />
    </div>

  );
};

export default Gallery;