import React from "react";
import "./RecipeSelect.css";

const RecipeSelect = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-box">
        <img src={require("./test_pasta.jpeg")} alt="pasta"></img>
        <p>This is pasta</p>
        <button>Like</button>
        {/* 클릭하면 넘어가는 링크 */}
      </div>
    </div>
  );
};

export default RecipeSelect;
