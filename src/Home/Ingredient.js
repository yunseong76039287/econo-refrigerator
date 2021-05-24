import React from "react";
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

    localStorage.setItem("refrigerator", JSON.stringify(selectedIngredients));
  };

  return (
    <div className="ingredient-container">
      <div className="ingredient-container-item">
        양파
        <button onClick={() => selectIngredient(this, "양파")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>대파</span>
        <button onClick={() => selectIngredient(this, "대파")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>된장</span>
        <button onClick={() => selectIngredient(this, "된장")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>마늘</span>
        <button onClick={() => selectIngredient(this, "마늘")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>청양고추</span>
        <button onClick={() => selectIngredient(this, "청양고추")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>소금</span>
        <button onClick={() => selectIngredient(this, "소금")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>두부</span>
        <button onClick={() => selectIngredient(this, "두부")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>간장</span>
        <button onClick={() => selectIngredient(this, "간장")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>애호박</span>
        <button onClick={() => selectIngredient(this, "애호박")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>감자</span>
        <button onClick={() => selectIngredient(this, "감자")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>멸치</span>
        <button onClick={() => selectIngredient(this, "멸치")}>추가</button>
      </div>
      <div className="ingredient-container-item">
        <span>다시마</span>
        <button onClick={() => selectIngredient(this, "다시마")}>추가</button>
      </div>
    </div>
  );
};

export default Ingredient;

/*




  */
