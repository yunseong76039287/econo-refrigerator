import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import InitialPageTemplate from "./InitialPageTemplate";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Recipe from "./Recipe/Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/search">
          <InitialPageTemplate Page={Search} />
        </Route>
        <Route exact path="/">
          <InitialPageTemplate Page={Home} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
