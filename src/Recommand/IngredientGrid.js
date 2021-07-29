import "./IngredientGrid.css";
import React, { useEffect, useState } from "react";
import ingredientData from "../data/ingredientData";
import { useLoadIngredientsId } from "../IngredientContext";
import IngredientSquare from "./IngredientSquare";
import CircularProgress from "@material-ui/core/CircularProgress";

const IngredientGrid = () => {
  const loadRefrigeratorIngredientsId = useLoadIngredientsId();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadRefrigeratorIngredientsId();
    setIsLoaded(true);
  }, []);

  return (
    <div className="ingredient-container">
      {isLoaded ? (
        ingredientData.ingredientDataArray.map(
          ({ id, name, imagePath, type }) => (
            <IngredientSquare
              key={id}
              id={id}
              name={name}
              imagePath={imagePath}
              type={type}
            />
          )
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default IngredientGrid;
