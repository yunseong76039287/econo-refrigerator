import React from "react";
import "./Searchbar.css";
import iCon from "./icon-searchbar.png";

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <span className="icon">
        <img src={iCon} className="icon"></img>
      </span>
      <input
        type="search"
        className="searchbar"
        placeholder="Search ingredient..."
      ></input>
    </div>
  );
};

export default Searchbar;
