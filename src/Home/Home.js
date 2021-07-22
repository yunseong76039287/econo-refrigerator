import React from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

const Home = ({
  refrigeratorIngredientsId,
  selectIngredient,
  deleteIngredient,
}) => {
  return (
    <div className="home">
      <Searchbar />
      <IngredientGrid
        refrigeratorIngredientsId={refrigeratorIngredientsId}
        selectIngredient={selectIngredient}
        deleteIngredient={deleteIngredient}
      />
    </div>
  );
};

export default Home;
