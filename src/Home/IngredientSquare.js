import React, { useState } from "react";
import "./IngredientSquare.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Check";
import {
  useSelectIngredient,
  useUnselectIngredient,
  useIsSelectedIngredient,
} from "../IngredientContext";

const IngredientSquare = ({ id, name, imageUrl }) => {
  const selectIngredient = useSelectIngredient();
  const unselectIngredient = useUnselectIngredient();
  const isSelectedIngredient = useIsSelectedIngredient();

  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <div className="ingredient-container-item">
      <div className="ingredient-header">
        <IconButton
          onClick={() => {
            if (isSelectedIngredient(id)) {
              unselectIngredient(id);
            } else {
              selectIngredient(id);
            }
          }}
          style={{
            padding: "5px",
            backgroundColor:
              isSelectedIngredient(id) === isButtonHover
                ? "#F3F3F3"
                : "#152f57",
          }}
          onMouseEnter={() => setIsButtonHover(true)}
          onMouseLeave={() => setIsButtonHover(false)}
        >
          <AddIcon fontSize="small" style={{ color: "#F7D556" }} />
        </IconButton>
      </div>
      <img src={imageUrl}></img>
      <div className="ingredient-footer">
        <span className="ingredient-name">{name}</span>
        <div className="ingredient-type">탄수화물</div>
      </div>
    </div>
  );
};

export default IngredientSquare;
