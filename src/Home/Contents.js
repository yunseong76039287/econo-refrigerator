import React, { useEffect, useState } from "react";
import "./Contents.css";
import Search from "./Search.js";
import Ingredient from "./Ingredient.js";
import Sidebar from "./Sidebar";

const Contents = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <div className="contents">
      <Sidebar selectedIngredients={selectedIngredients} />
      <div className="ingredientHolder">
        <Search />
      </div>
      <div>
        <p>검색창</p>
        <Ingredient
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
      </div>
    </div>
  );
};

export default Contents;