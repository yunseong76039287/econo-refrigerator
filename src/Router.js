import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./Router.css";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

const Router = ({ Page }) => {
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
    <BrowserRouter>
      <div className="initial">
        <Header />
        <Switch>
          <Route
            path="/recipe"
            component={() => {
              return (
                <div className="contentsbody">
                  <Recipe />
                </div>
              );
            }}
          >
            <Recipe />
          </Route>
          <Route
            path="/search"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar
                    refrigeratorIngredients={refrigeratorIngredients}
                    selectIngredient={selectIngredient}
                    setRefrigeratorIngredients={setRefrigeratorIngredients}
                  />
                  <Search />
                </div>
              );
            }}
          ></Route>
          <Route
            exact={true}
            path="/"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar
                    refrigeratorIngredients={refrigeratorIngredients}
                    selectIngredient={selectIngredient}
                    setRefrigeratorIngredients={setRefrigeratorIngredients}
                  />
                  <Home
                    refrigeratorIngredients={refrigeratorIngredients}
                    selectIngredient={selectIngredient}
                  />
                </div>
              );
            }}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
