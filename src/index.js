import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home/Home.js";
import RecipeHome from "./Recipe/RecipeHome.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <RecipeHome />
  </React.StrictMode>,
  document.getElementById("root")
);
