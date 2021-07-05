import React from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

const Home = ({ selectedIngredients, selectIngredient }) => {
  return (
    <div className="home">
      <Searchbar />
      <IngredientGrid
        selectedIngredients={selectedIngredients}
        selectIngredient={selectIngredient}
      />
    </div>
  );
};

export default Home;
