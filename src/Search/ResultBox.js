import "./ResultBox.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
const ResultBox = ({ id, name, description, imageUrl, likeCount }) => {
  return (
    <div className="result-box">
      <Link exact to="/recipe" className="result-link">
        <img className="result-img" src={imageUrl} alt={imageUrl} />
        <div className="text-content">
          <h3>{name}</h3>
          {checkNull(description)}
        </div>
      </Link>
      <Toggle id={id} likeCount={likeCount} />
    </div>
  );
};

const checkNull = (element) => {
  if (element === null) {
    return <p id="preview">레시피의 설명이 없습니다.</p>;
  }
  return <p id="preview">{element}</p>;
};
export default ResultBox;
