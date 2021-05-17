import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./RecipeHome.css";
import Header from "../Home/Header";
import Sidebar from "../Home/Sidebar";
import Ingredient from "../Home/Ingredient";
import RecipeSelect from "./RecipeSelect";
import RecipeContent from "./RecipeContent";
const RecipeHome = () => {
  return (
    <div className="Recipe-home">
      <Header />
      <RecipeContent />
    </div>
  );
};
export default RecipeHome;
