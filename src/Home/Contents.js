import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Contents.css";
import Search from "./Search.js";
import Ingredient from "./Ingredient.js";
import Sidebar from "./Sidebar";

const Contents = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <div className="contents">
      <Sidebar
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
      <div className="ingredient-holder">
        <Search />
        <Ingredient
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
      </div>
    </div>
  );
};

export default Contents;
