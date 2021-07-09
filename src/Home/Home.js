import React from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
