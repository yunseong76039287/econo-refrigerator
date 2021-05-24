import React from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import Ingredient from "./Ingredient.js";

const Home = ({ selectedIngredients, setSelectedIngredients }) => {
  return (
    <div className="home">
      <Searchbar />
      <Ingredient
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
    </div>
  );
};

export default Home;
