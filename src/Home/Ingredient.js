import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Ingredient.css";

const Ingredient = ({ selectedIngredients, setSelectedIngredients }) => {
  const selectIngredient = (event, selected) => {
    let newSelectedIngredients = [];

    selectedIngredients.forEach((ingredient) => {
      newSelectedIngredients.push(ingredient);
    });

    newSelectedIngredients.push(selected);
    setSelectedIngredients(newSelectedIngredients);

    localStorage.setItem(
      "refrigerator",
      JSON.stringify(newSelectedIngredients)
    );
  };

  let ingredientArray = [
    {
      id: 1,
      name: "양파",
      imageUrl: "/images/onion.jpg",
      isOverap: false,
    },
    {
      id: 2,
      name: "대파",
      imageUrl: "/images/greenonion.jpg",
      isOverap: false,
    },
    {
      id: 3,
      name: "간장",
      imageUrl: "/images/soysauce.jpg",
      isOverap: false,
    },
    {
      id: 4,
      name: "된장",
      imageUrl: "/images/Doenjang.jpg",
      isOverap: false,
    },
    {
      id: 5,
      name: "고추장",
      imageUrl: "/images/gochujang.jpg",
      isOverap: false,
    },
  ];
  function showIngredient({ name, imageUrl, isOverap }) {
    return (
      <div className="ingredient-container-item">
        <div className="ingredient-header">
          <span>{name}</span>
          <button
            onClick={() => selectIngredient(this, name)}
            style={isOverap ? { display: "none" } : { display: "inline" }}
          >
            추가
          </button>
        </div>
        <div>
          <img src={imageUrl}></img>
        </div>
      </div>
    );
  }

  return (
    <div className="ingredient-container">
      {ingredientArray.map(showIngredient)}
    </div>
  );
};

export default Ingredient;
