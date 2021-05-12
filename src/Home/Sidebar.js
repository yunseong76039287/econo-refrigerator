import React, { useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedIngredients }) => {
  useEffect(() => {
    console.log(selectedIngredients);
    localStorage.setItem("selectorIngredient", JSON.stringify(selectedIngredients));
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
