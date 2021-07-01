import React from "react";
import ReactDOM from "react-dom";
import "./Ingredient.css";


const Ingredient = ({ selectedIngredients, setSelectedIngredients}) => {
  const selectIngredient = (event, selected) => {
    let newSelectedIngredients = [];

    selectedIngredients.forEach((ingredient) => {
      newSelectedIngredients.push(ingredient);
    });
    newSelectedIngredients.push(selected);
    setSelectedIngredients(newSelectedIngredients);
    
    localStorage.setItem("refrigerator", JSON.stringify(selectedIngredients));
  };

  let ingredientArray = [
    {
      "id" : 1,
      "name" : "양파",
      "imageUrl" : "/images/onion.jpg"
    },
    {
      "id" : 2,
      "name" : "대파",
      "imageUrl" : "/images/greenonion.jpg"
    },
    {
      "id" : 3,
      "name" : "간장",
      "imageUrl" : "/images/soysauce.jpg"
    },
    {
      "id" : 4,
      "name" : "된장",
      "imageUrl" : "/images/Doenjang.jpg"
    },
    {
      "id" : 5,
      "name" : "고추장",
      "imageUrl" : "/images/gochujang.jpg"
    },
  ];
  function showIngredient({name, imageUrl}){
    return(
      <div className="ingredient-container-item">
        <div className="ingredient-header">
          <span>{name}</span>
          <button onClick={() => selectIngredient(this, name)}>추가</button>
        </div>
        <img src={imageUrl}></img>
      </div>
    );
  };

  return (
    <div className="ingredient-container">
    {ingredientArray.map(showIngredient)}
    </div>
  );
};

export default Ingredient;
