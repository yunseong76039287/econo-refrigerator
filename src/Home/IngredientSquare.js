import React, { useState, useEffect } from "react";
import "./IngredientSquare.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Check";

const IngredientSquare = ({
  id,
  name,
  imageUrl,
  selectIngredient,
  deleteIngredient,
}) => {
  const [isOverlap, setIsOverlap] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);

  useEffect(() => {
    console.log(id);
  }, []);

  useEffect(() => {
    console.log("over" + isOverlap);
  }, [isOverlap]);

  return (
    <div className="ingredient-container-item">
      <div className="ingredient-header">
        <IconButton
          onClick={() => {
            if (isOverlap) {
              setIsOverlap(false);
              deleteIngredient(this, id);
            } else {
              setIsOverlap(true);
              selectIngredient(this, id);
            }
          }}
          style={{
            padding: "5px",
            backgroundColor:
              isOverlap === isButtonHover ? "#F3F3F3" : "#152f57",
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
