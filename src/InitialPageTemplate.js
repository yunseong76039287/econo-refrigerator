import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./InitialPageTemplate.css";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const InitialPageTemplate = ({ Page }) => {
  const [refrigeratorIngredients, setRefrigeratorIngredients] = useState([]);

  // 재료를 선택할 때 중복을 검사하는 함수
  const selectIngredient = (event, id) => {
    const searchIngredient = refrigeratorIngredients.find((element) => {
      if (element === id) return true;
      return false;
    });
    console.log("찾은 id" + searchIngredient);
    // 중복 없음
    if (searchIngredient === undefined) {
      return appendIngredientHooks(this, id);
    }
  };

  // 재료 추가 함수
  const appendIngredientHooks = (event, id) => {
    let newSelectedIngredients = [];

    refrigeratorIngredients.forEach((ingredientId) => {
      newSelectedIngredients.push(ingredientId);
    });

    newSelectedIngredients.push(id);
    setRefrigeratorIngredients(newSelectedIngredients);

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
          refrigeratorIngredients={refrigeratorIngredients}
          selectIngredient={selectIngredient}
          setRefrigeratorIngredients={setRefrigeratorIngredients}
        />
        <div className="page">
          {/* <Home
            refrigeratorIngredients={refrigeratorIngredients}
            selectIngredient={selectIngredient}
          /> */}
          {/* <Link to="/">Home</Link>
            <Link to="/search">Search</Link> */}
          <Link to="/recipe">Recipe</Link>
          <Link to="/search">sea</Link>

          <Page />
        </div>
      </div>
    </div>
  );
};

export default InitialPageTemplate;
