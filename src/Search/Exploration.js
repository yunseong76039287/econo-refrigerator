import "./Search.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultBox from "./ResultBox";
import Api from "../Api";
import CircularProgress from "@material-ui/core/CircularProgress";

const Exploration = () => {
  const [recipes, setRecipes] = useState([]);

  const { search: ingredientsParam } = useLocation();

  useEffect(() => {
    async function initWithServer() {
      await searchInsufficientRecipes();
    }
    initWithServer();

    initLikeStateOfRecipes(recipes);
  }, []);

  const searchInsufficientRecipes = async () => {
    const searchResult = await Api.searchInsufficientRecipes(ingredientsParam);
    setRecipes(searchResult);
  };

  const initLikeStateOfRecipes = (recipes) => {
    recipes.forEach((recipe) => {
      const id = recipe.id;
      if (
        localStorage.getItem(id) === null ||
        localStorage.getItem(id) === undefined
      ) {
        window.localStorage.setItem(id, false);
      }
    });
  };

  return (
    <div className="search-content">
      <div className="search-result-holder">
        <h1 className="search-result-title">🚀 레시피를 구경해보세요!</h1>
        {recipes ? (
          recipes.length === 0 ? (
            "보여줄 수 있는 레시피가 없어요 😭"
          ) : (
            recipes.map((element) => {
              return (
                <ResultBox
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  description={element.description}
                  ingredients={element.ingredients}
                  imagePath={element.imagePath}
                  likeCount={element.likeCount}
                />
              );
            })
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Exploration;
