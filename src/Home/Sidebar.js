import React, { useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedIngredients }) => {
  useEffect(() => {
    const loadRefrigerator = localStorage.getItem("refrigeator");
  }, [selectedIngredients]);

  return (
    <div className="sidebar">
      <h1 className="ingredient">재료 목록</h1>
      <ul className="ingredient-list">
        {selectedIngredients.map((selected) => {
          return <li>{selected}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
