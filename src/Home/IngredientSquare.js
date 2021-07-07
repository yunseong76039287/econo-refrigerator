import React, { useState } from "react";
import "./IngredientSquare.css";

const IngredientSquare = ({ id, name, imageUrl, selectIngredient }) => {
  const [isOverlap, setIsOverlap] = useState(false);

  return (
    <div className="ingredient-container-item">
      <div className="ingredient-header">
        <span className="ingredient-name">{name}</span>
        <button
          className="ingredient-add-button"
          onClick={() => {
            selectIngredient(this, id);
            setIsOverlap(true);
          }}
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
