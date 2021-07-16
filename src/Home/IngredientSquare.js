import React, { useState } from "react";
import "./IngredientSquare.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const IngredientSquare = ({ id, name, imageUrl, selectIngredient }) => {
  const [isOverlap, setIsOverlap] = useState(false);

  return (
    <div className="ingredient-container-item">
      <div className="ingredient-header">
        <span className="ingredient-name">{name}</span>
        {/* <button
          className="ingredient-add-button"
          onClick={() => {
            selectIngredient(this, id);
            setIsOverlap(true);
          }}
        >
          add
        </button> */}
        <Button
          className="ingredient-add-button"
          variant="outlined"
          size="small"
          onClick={() => {
            selectIngredient(this, id);
            setIsOverlap(true);
          }}
        >
          <AddIcon fontSize="small"></AddIcon>
        </Button>
      </div>
      <div>
        <img src={imageUrl}></img>
      </div>
    </div>
  );
};

export default IngredientSquare;
