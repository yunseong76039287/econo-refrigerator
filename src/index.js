import React from "react";
import "./index.css";
import InitialPage from "./InitialPage.js";
import Router from "./Router.js";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router /> */}
    <InitialPage />
  </React.StrictMode>,
  document.getElementById("root")
);
