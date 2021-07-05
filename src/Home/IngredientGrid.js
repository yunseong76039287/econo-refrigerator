import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ingredientDataArray from "../data/ingredientDataArray";
import "./IngredientGrid.css";
import IngredientSquare from "./IngredientSquare";

const IngredientGrid = ({ selectedIngredients, selectIngredient }) => {
  return (
    <div className="ingredient-container">
      {ingredientDataArray.map(({ id, name, imageUrl }) => (
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
