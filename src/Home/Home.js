import React, { useEffect } from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

const Home = React.memo(function component({
  refrigeratorIngredientsId,
  selectIngredient,
  deleteIngredient,
}) {
  useEffect(() => console.log("home init"), []);
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
});

export default Home;
