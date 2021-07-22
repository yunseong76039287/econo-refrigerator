import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router.js";
import { IngredientProvider } from "./IngredientContext";

ReactDOM.render(
  <React.StrictMode>
    <IngredientProvider>
      <Router />
    </IngredientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
