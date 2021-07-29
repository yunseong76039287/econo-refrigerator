import "./Search.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultBox from "./ResultBox";
import Api from "../Api";
import CircularProgress from "@material-ui/core/CircularProgress";

const Search = () => {
  const [sufficientRecipes, setSufficientRecipes] = useState();
  const [insufficientRecipes, setInsufficientRecipes] = useState();

  const { search: ingredientsParam } = useLocation();

  useEffect(() => {
    async function initWithServer() {
      await searchSufficientRecipes();
      await searchInsufficientRecipes();
    }
    initWithServer();
  }, []);

  useEffect(() => {
    sufficientRecipes && initLikeStateOfRecipes(sufficientRecipes);
  }, [sufficientRecipes]);
  useEffect(() => {
    insufficientRecipes && initLikeStateOfRecipes(insufficientRecipes);
  }, [insufficientRecipes]);

  // 서버로 부터 요청 by axios
  const searchSufficientRecipes = async () => {
    const searchResult = await Api.searchSufficientRecipes(ingredientsParam);
    setSufficientRecipes(searchResult);
  };

  const searchInsufficientRecipes = async () => {
    const searchResult = await Api.searchInsufficientRecipes(ingredientsParam);
    setInsufficientRecipes(searchResult);
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

  const getSufficientIngredients = (recipeIngredients) => {
    const currentIngredients = ingredientsParam.split("=")[1].split(",");

    let sufficientIngredients = [];
    recipeIngredients.forEach((recipeIngredient) => {
      const insufficientIngredient = currentIngredients.find(
        (ele) => parseInt(ele) === recipeIngredient.id
      );

      if (insufficientIngredient !== undefined) {
        sufficientIngredients.push(recipeIngredient);
      }
    });

    return sufficientIngredients;
  };

  const getInsufficientIngredients = (recipeIngredients) => {
    const currentIngredients = ingredientsParam.split("=")[1].split(",");

    let insufficientIngredients = [];
    recipeIngredients.forEach((recipeIngredient) => {
      const insufficientIngredient = currentIngredients.find(
        (ele) => parseInt(ele) === recipeIngredient.id
      );

      if (insufficientIngredient === undefined) {
        insufficientIngredients.push(recipeIngredient);
      }
    });

    return insufficientIngredients;
  };

  return (
    <div className="search-content">
      <div className="search-result-holder">
        <h1 className="search-result-title">
          👨‍🍳 냉장고에 있는 재료로 만들 수 있는 레시피에요.
        </h1>
        {sufficientRecipes ? (
          sufficientRecipes.length === 0 ? (
            "만들 수 있는 레시피가 없어요 😭"
          ) : (
            sufficientRecipes.map((element) => {
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

      <div className="search-result-holder">
        {insufficientRecipes ? (
          <>
            <h1 className="search-result-title">
              🥣 재료가 조금 더 있으면 가능한 이런 요리는 어떠세요?
            </h1>
            {insufficientRecipes.map((element) => {
              return (
                <ResultBox
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  description={element.description}
                  ingredients={getSufficientIngredients(element.ingredients)}
                  insufficientIngredients={getInsufficientIngredients(
                    element.ingredients
                  )}
                  imagePath={element.imagePath}
                  likeCount={element.likeCount}
                />
              );
            })}
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Search;
