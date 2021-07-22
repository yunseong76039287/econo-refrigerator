import "./Home.css";
import React from "react";
import Searchbar from "./Searchbar.js";
import IngredientGrid from "./IngredientGrid.js";

const Home = () => {
  return (
    <div className="home">
      <Searchbar />
      <IngredientGrid />
    </div>
  );
};

export default Home;
