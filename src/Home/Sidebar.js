import React, { useState, useEffect } from "react";
import ingredientData from "../data/ingredientData";
import "./Sidebar.css";

const Sidebar = ({
  refrigeratorIngredients,
  selectIngredient,
  setRefrigeratorIngredients,
}) => {
  // localStorage 초기화
  let firstCheck = [];
  firstCheck = window.localStorage.getItem("refrigerator");
  if (firstCheck === null) {
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(refrigeratorIngredients)
    );
  }
  //localstorage에서 받은 값을 selectedIngredient에 저장하는법?
  console.log("임시 저장소 : " + refrigeratorIngredients);
  console.log("selected에 저장된 값 : " + refrigeratorIngredients);

  const deleteIngredient = (event, id) => {
    const removeTarget = refrigeratorIngredients.find((element) => {
      if (element === id) return true;
      return false;
    });
    console.log(removeTarget);
    // removeTarget을 찾았으니 hook의 state를 변화시키자. (filter 사용)
    const newRefrigeratorIngredients = refrigeratorIngredients.filter(
      (element) => element !== removeTarget
    );
    console.log(newRefrigeratorIngredients);
    setRefrigeratorIngredients(newRefrigeratorIngredients);
    // localStorage 갱신.
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(newRefrigeratorIngredients)
    );
    // isOverlap의 상태를 변경해야 함.

    return 0;
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">냉장고</h1>
      <ul className="ingredient-list">
        {refrigeratorIngredients.map((selected) => {
          const name = ingredientData.getIngredientNameById(selected);
          return (
            <li>
              <div className="ingredient-element">
                {name}
                <button onClick={() => deleteIngredient(this, selected)}>
                  삭제
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
