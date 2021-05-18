import React from "react";
import "./Contents.css";
import Searchbar from "./Searchbar.js";
import Ingredient from "./Ingredient.js";

const Contents = ({ selectedIngredients, setSelectedIngredients }) => {
  return (
    <div className="contents">
      <Searchbar />
      <Ingredient
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
    </div>
  );
};

export default Contents;
