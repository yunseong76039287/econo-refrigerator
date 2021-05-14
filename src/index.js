import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home/Home.js";
import Recipe from "./Recipe/Recipe.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Recipe />
  </React.StrictMode>,
  document.getElementById("root")
);
