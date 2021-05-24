import React from "react";
import "./ResultBox.css";

const ResultBox = ({ name, description, imageUrl, imageName }) => {
  return (
    <div className="result-box">
      <a>
        <img src={imageUrl} alt={imageName} />
        <div className="text-content">
          <h3>{name}</h3>
          <p id="preview">{description}</p>
        </div>
      </a>
      <button id="like">❤</button>
    </div>
  );
};

export default ResultBox;
