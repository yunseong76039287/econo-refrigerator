import "./Router.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Recommandation/Sidebar";
import Recommandation from "./Recommandation/Recommandation";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./Home/Home";

const Router = ({ Page }) => {
  return (
    <BrowserRouter>
      <div className="initial">
        <Header />
        <Switch>
          <Route
            path="/recipe/:id"
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
                  <Sidebar />
                  <Search />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/recommendation"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar />
                  <Recommandation />
                </div>
              );
            }}
          ></Route>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <div className="contentsbody">
                  <Home />
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
