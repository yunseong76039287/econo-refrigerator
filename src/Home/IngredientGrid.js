import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ingredientData from "../data/ingredientData";
import "./IngredientGrid.css";
import IngredientSquare from "./IngredientSquare";

const IngredientGrid = ({ refrigeratorIngredients, selectIngredient }) => {
  return (
    <div className="ingredient-container">
      {ingredientData.ingredientDataArray.map(({ id, name, imageUrl }) => (
        <IngredientSquare
          id={id}
          name={name}
          imageUrl={imageUrl}
          selectIngredient={selectIngredient}
        />
      ))}
    </div>
  );
};

export default IngredientGrid;
