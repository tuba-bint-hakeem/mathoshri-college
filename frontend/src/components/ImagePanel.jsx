import React, { useState } from "react";
import "./ImagePanel.css";

// ✅ images import karo
import img1 from "../images/Image1.jpeg";
import img2 from "../images/image.jpeg";
import img3 from "../images/image3.jpeg";

const images = [img1, img2, img3];

const ImagePanel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="image-panel">
      <button className="nav left" onClick={prevSlide}>❮</button>

      <img
        src={images[index]}
        alt="panel"
        className="panel-image"
      />

      <button className="nav right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImagePanel;
