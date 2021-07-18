import React from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

const Home = ({ refrigeratorIngredients, selectIngredient }) => {
  return (
    <div className="home">
      <Searchbar />
      <IngredientGrid
        refrigeratorIngredients={refrigeratorIngredients}
        selectIngredient={selectIngredient}
      />
    </div>
  );
};

export default Home;
