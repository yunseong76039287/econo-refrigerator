import "./Router.css";
import React, { useState, useEffect } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import Home from "./Home/Home";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

const Router = ({ Page }) => {
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
                  <Sidebar />
                  <Search />
                </div>
              );
            }}
          ></Route>
          <Route
            exact={true}
            path="/recommendation"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar />
                  <Home />
                </div>
              );
            }}
          ></Route>
          <Redirect to="/recommendation" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
