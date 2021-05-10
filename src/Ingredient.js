import React from 'react';
import ReactDOM from 'react-dom';
import './Ingredient.css';


const ingredientList = document.querySelector(".ingredient-list");
const ingredientContainer = document.querySelector(".ingredient-container");
const ingredientContainerItem = document.querySelector(".ingredient-container-item");


const addIngredient = (text) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = text;
    list.appendChild(span);
    ingredientList.appendChild(list);
}

const selectIngredient = (event) => {
    addIngredient("재료 클릭 테스트");
}

const Ingredient = () => {
    return (
        <div className="ingredient-container">
            <div className="ingredient-container-item">양파 <button onClick={selectIngredient}>추가</button></div>
            <div className="ingredient-container-item"><span>대파</span></div>
            <div className="ingredient-container-item"><span>된장</span></div>
            <div className="ingredient-container-item"><span>마늘</span></div>
            <div className="ingredient-container-item"><span>청양고추</span></div>
            <div className="ingredient-container-item"><span>소금</span></div>
            <div className="ingredient-container-item"><span>두부</span></div>
            <div className="ingredient-container-item"><span>간장</span></div>
            <div className="ingredient-container-item"><span>애호박</span></div>
            <div className="ingredient-container-item"><span>감자</span></div>
            <div className="ingredient-container-item"><span>멸치</span></div>
            <div className="ingredient-container-item"><span>다시마</span></div>
        </div>
    )

}





export default Ingredient;