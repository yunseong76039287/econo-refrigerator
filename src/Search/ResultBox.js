import React from "react";
import "./ResultBox.css";

const ResultBox = ({ name, introduction, imageUrl, imageName }) => {
  return (
    <div className="result-box">
      <a className="result-link">
        <img src={imageUrl} alt={imageName} />
        <div className="text-content">
          <h3>{name}</h3>
          <p id="preview">{introduction}</p>
        </div>
      </a>
      <button id="like">❤</button>
    </div>
  );
};

export default ResultBox;
