import "./Search.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ResultBox from "./ResultBox";
import Api from "../Api";

const Explore = () => {
  const [recipes, setRecipes] = useState();
  const [offset, setOffset] = useState(0);

  const { search: ingredientsParam } = useLocation();

  useEffect(() => {
    async function initWithServer() {
      if (ingredientsParam.split("=")[1] === "0") {
        await get10RecipeWithOffset();
      } else {
        await searchInsufficientRecipes();
      }
    }
    initWithServer();
  }, []);

  useEffect(() => {
    recipes && initLikeStateOfRecipes(recipes);
  }, [recipes]);

  const get10RecipeWithOffset = async () => {
    const searchResult = await Api.get10RecipeWithOffset(offset);
    if (recipes) {
      setRecipes((prev) => [...prev, ...searchResult]);
    } else {
      setRecipes(searchResult);
    }
    setOffset((prev) => prev + 10);
  };

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
      <Button
        className="more-button"
        color="primary"
        size="large"
        startIcon={<ExpandMoreIcon />}
        onClick={() => get10RecipeWithOffset()}
      >
        more
      </Button>
    </div>
  );
};

export default Explore;
