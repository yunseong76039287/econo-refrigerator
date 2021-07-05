import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./InitialPage.css";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";

const InitialPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const selectIngredient = (id) => {
    const searchIngredient = selectIngredient.find((element) => {
      if (element.id === id) return true;
    });

    // 중복 없음
    if (searchIngredient === undefined) {
      appendIngredientHooks(this, id);
    }
  };

  // 이 함수 수정해야 함. name 기반 -> id 기반
  // 수정하고 확인하기
  const appendIngredientHooks = (event, selected) => {
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

  return (
    <div className="initial">
      <Header />
      <div className="contentsbody">
        <Sidebar
          selectedIngredients={selectedIngredients}
          selectIngredient={selectIngredient}
        />
        <div className="page">
          <Home
            selectedIngredients={selectedIngredients}
            selectIngredient={selectIngredient}
          />

          {/* <Search /> */}
          {/* <Recipe /> */}
          {/* react router : 페이지 전환하는 개념.. react-router-dom : 페이지 전환  */}
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
