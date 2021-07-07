import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Search from "./Search/Search";
import Recipe from "./Recipe/Recipe";
const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <p>
          <Link to="/search">Search</Link>
        </p>
        <p>
          <Link to="/recipe">Recipe</Link>
        </p>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
