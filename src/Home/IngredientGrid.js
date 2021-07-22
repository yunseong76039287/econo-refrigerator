import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ingredientData from "../data/ingredientData";
import "./IngredientGrid.css";
import IngredientSquare from "./IngredientSquare";

const IngredientGrid = ({
  refrigeratorIngredientsId,
  selectIngredient,
  deleteIngredient,
}) => {
  return (
    <div className="ingredient-container">
      {ingredientData.ingredientDataArray.map(({ id, name, imageUrl }) => (
        <IngredientSquare
          key={id}
          id={id}
          name={name}
          imageUrl={imageUrl}
          selectIngredient={selectIngredient}
          deleteIngredient={deleteIngredient}
        />
      ))}
    </div>
  );
};

export default IngredientGrid;
