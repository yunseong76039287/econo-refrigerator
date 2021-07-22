import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    localStorage.setItem(
      "refrigerator",
      JSON.stringify(refrigeratorIngredientsId)
    );
  }, [refrigeratorIngredientsId]);

  // 재료 추가 함수
  const selectIngredient = (id) => {
    setRefrigeratorIngredientsId([...refrigeratorIngredientsId, id]);
  };

  const deleteIngredient = (id) => {
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
