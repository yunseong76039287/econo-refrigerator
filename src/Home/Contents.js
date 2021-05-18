import React from "react";
import "./Contents.css";
import Search from "./Search.js";
import Ingredient from "./Ingredient.js";

const Contents = ({ selectedIngredients, setSelectedIngredients }) => {
  return (
    <div className="contents">
      <Search />
      <Ingredient
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
    </div>
  );
};

export default Contents;
