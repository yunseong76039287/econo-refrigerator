import React, { useState } from "react";
import RecipeSelect from "./RecipeSelect";
import Sidebar from "../Home/Sidebar";
import "./RecipeContent.css";

// 검색창을 재사용 할 수 있는지?
const RecipeContent = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <div className="recipe-content">
      <Sidebar
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
      <RecipeSelect />
    </div>
  );
};

export default RecipeContent;
