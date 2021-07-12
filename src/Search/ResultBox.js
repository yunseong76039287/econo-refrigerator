import React from "react";
import "./ResultBox.css";
import { Link } from "react-router-dom";

const ResultBox = ({ name, introduction, imageUrl, imageName }) => {
  return (
    <div className="result-box">
      <Link exact to="/recipe" className="result-link">
        <img src={imageUrl} alt={imageName} />
        <div className="text-content">
          <h3>{name}</h3>
          <p id="preview">{introduction}</p>
        </div>
      </Link>
      <button id="like">❤</button>
    </div>
  );
};

export default ResultBox;
