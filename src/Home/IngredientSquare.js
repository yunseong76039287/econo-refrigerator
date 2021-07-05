import React, { useState } from "react";
import "./IngredientSquare.css";

const IngredientSquare = ({ id, name, imageUrl, selectIngredient }) => {
  const [isOverlap, setIsOverlap] = useState(false);

  return (
    <div className="ingredient-container-item">
      <div className="ingredient-header">
        <span>{name}</span>
        <button
          onClick={() => {
            selectIngredient(this, name);
            setIsOverlap(true);
          }}
          style={isOverlap ? { display: "none" } : { display: "inline" }}
        >
          추가
        </button>
      </div>
      <div>
        <img src={imageUrl}></img>
      </div>
    </div>
  );
};

export default IngredientSquare;
