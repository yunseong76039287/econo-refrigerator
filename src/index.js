import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Initial from "./Initial.js";
import Search from "./Search/Search.js";

ReactDOM.render(
  <React.StrictMode>
    <Initial />
    {/* <Search /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
