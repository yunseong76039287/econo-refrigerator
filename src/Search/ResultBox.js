import React, { useState } from "react";
import "./ResultBox.css";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
const ResultBox = ({ name, introduction, imageUrl, imageName }) => {
  const [likeToggleOn, setLikeToggleOn] = useState(false);

  return (
    <div className="result-box">
      <Link exact to="/recipe" className="result-link">
        <img src={imageUrl} alt={imageName} />
        <div className="text-content">
          <h3>{name}</h3>
          <p id="preview">{introduction}</p>
        </div>
      </Link>
      <Toggle likeToggleOn={likeToggleOn} setLikeToggleOn={setLikeToggleOn} />
    </div>
  );
};

export default ResultBox;
