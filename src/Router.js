import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./Router.css";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

const Router = ({ Page }) => {
  const [refrigeratorIngredientsId, setRefrigeratorIngredientsId] = useState(
    []
  );

  // 재료를 선택할 때 중복을 검사하는 함수
  const selectIngredient = (event, id) => {
    const searchIngredient = refrigeratorIngredientsId.find((element) => {
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

    refrigeratorIngredientsId.forEach((ingredientId) => {
      newSelectedIngredients.push(ingredientId);
    });

    newSelectedIngredients.push(id);
    setRefrigeratorIngredientsId(newSelectedIngredients);

    localStorage.setItem(
      "refrigerator",
      JSON.stringify(newSelectedIngredients)
    );
  };

  const deleteIngredient = (event, id) => {
    const removeTarget = refrigeratorIngredientsId.find((element) => {
      if (element === id) return true;
      return false;
    });
    console.log(removeTarget);
    // removeTarget을 찾았으니 hook의 state를 변화시키자. (filter 사용)
    const newRefrigeratorIngredients = refrigeratorIngredientsId.filter(
      (element) => element !== removeTarget
    );
    console.log(newRefrigeratorIngredients);
    setRefrigeratorIngredientsId(newRefrigeratorIngredients);
    // localStorage 갱신.
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(newRefrigeratorIngredients)
    );
    return 0;
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
                    refrigeratorIngredientsId={refrigeratorIngredientsId}
                    selectIngredient={selectIngredient}
                    setRefrigeratorIngredientsId={setRefrigeratorIngredientsId}
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
                    refrigeratorIngredientsId={refrigeratorIngredientsId}
                    selectIngredient={selectIngredient}
                    setRefrigeratorIngredientsId={setRefrigeratorIngredientsId}
                    deleteIngredient={deleteIngredient}
                  />
                  <Home
                    refrigeratorIngredientsId={refrigeratorIngredientsId}
                    selectIngredient={selectIngredient}
                    deleteIngredient={deleteIngredient}
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
