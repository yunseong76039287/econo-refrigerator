import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home/Home.js";
import Search from "./Search/Search.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Search />
  </React.StrictMode>,
  document.getElementById("root")
);
