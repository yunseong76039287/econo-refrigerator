import React from "react";
import "./index.css";
import Router from "./Router.js";
import ReactDOM from "react-dom";
import InitialPageTemplate from "./InitialPageTemplate";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router /> */}
    <InitialPageTemplate />
  </React.StrictMode>,
  document.getElementById("root")
);
