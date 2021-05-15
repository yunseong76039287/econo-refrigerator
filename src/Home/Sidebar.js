import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedIngredients, setSelectedIngredients }) => {
  // localStorage 초기화
  const firstCheck = window.localStorage.getItem("refrigerator");
  if (firstCheck === null) {
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(selectedIngredients)
    );
  }
  //refrigerator에서 가져오기.
  // 받아온 임시 저장된 localstorage
  if (selectedIngredients === null) {
  }
  console.log("임시 저장소 : " + selectedIngredients);
  // setSelectedIngredients(refriIngre);
  console.log("selected에 저장된 값 : " + selectedIngredients);

  return (
    <div className="sidebar">
      <h1 className="ingredient">재료 목록</h1>
      <ul className="ingredient-list"></ul>
    </div>
  );
};

/* {selectedIngredients.map((selected) => {
          return (
            <li>
              {selected} <button>삭제</button>
            </li>
          );
        })} */
export default Sidebar;
