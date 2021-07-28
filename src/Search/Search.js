import "./Search.css";
import React, { useState, useEffect } from "react";
import ResultBox from "./ResultBox";
import { useIngredientsId } from "../IngredientContext";
import Api from "../Api";

const Search = () => {
  const refrigeratorIngredients = useIngredientsId();

  const [searchingResultRecipes, setSearchingResultRecipes] = useState([]);
  const [sufficientRecipes, setSufficientRecipes] = useState([]);
  const [insufficientRecipes, setInufficientRecipes] = useState([]);

  useEffect(() => {
    async function initWithServer(refrigeratorIngredients) {
      await searchSufficientRecipes(refrigeratorIngredients);
      // await searchInsufficientRecipes(refrigeratorIngredients);
    }
    initWithServer(refrigeratorIngredients);

    initLikeStateOfRecipes(sufficientRecipes);
    initLikeStateOfRecipes(insufficientRecipes);
  }, []);

  useEffect(() => {
    console.log(sufficientRecipes);
  }, [sufficientRecipes]);

  // 서버로 부터 요청 by axios
  const searchSufficientRecipes = async (ingredients) => {
    let ingredientsParam = "ingredients=" + ingredients.join(",");
    console.log(ingredientsParam);

    const searchResult = await Api.searchSufficientRecipes(ingredientsParam);
    setSufficientRecipes(searchResult);
  };

  // const searchInsufficientRecipes = asnyc () => {};

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
        <h1 className="search-result-title">우리가 추천하는 레시피는...</h1>
        {sufficientRecipes &&
          sufficientRecipes.map((element) => {
            return (
              <ResultBox
                id={element.id}
                name={element.name}
                description={element.description}
                ingredients={element.ingredients}
                imagePath={element.imagePath}
                likeCount={element.likeCount}
              />
            );
          })}
      </div>

      <div className="search-result-holder">
        <h1 className="search-result-title">
          재료가 조금만 더 있으면 이것도 가능해요!
        </h1>
        {/* {insufficientSearchResultRecipesData.map((element) => {
          return (
            <ResultBox
              id={element.id}
              name={element.name}
              description={element.description}
              ingredients={element.ingredients}
              insufficientIngredients={element.insufficientIngredients}
              imagePath={element.imagePath}
              likeCount={element.likeCount}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Search;

const sufficientSearchResultRecipesData = [
  {
    id: 1,
    name: "토마토 파스타",
    description: "토마토 베이스인 파스타",
    imagePath: "/images/test/recipe1.jpg",
    ingredients: [
      {
        id: 1,
        ingredient: 1,
      },
      {
        id: 2,
        ingredient: 2,
      },
    ],
    likeCount: 10,
  },
  {
    id: 2,
    name: "해물 파스타",
    description: null,
    imagePath: "/images/test/recipe2.jpg",
    ingredients: [
      {
        id: 1,
        ingredient: 1,
      },
      {
        id: 2,
        ingredient: 2,
      },
    ],
    likeCount: 0,
  },
  {
    id: 3,
    name: "그냥 파스타",
    description: "그냥",
    imagePath: "/images/test/recipe3.jpg",
    ingredients: [
      {
        id: 1,
        ingredient: 1,
      },
      {
        id: 2,
        ingredient: 2,
      },
    ],
    likeCount: 0,
  },
];

const insufficientSearchResultRecipesData = [
  {
    id: 1,
    name: "토마토 파스타",
    description: "토마토 베이스인 파스타",
    imagePath: "/images/test/recipe1.jpg",
    ingredients: [
      {
        id: 1,
        ingredient: 1,
      },
      {
        id: 2,
        ingredient: 2,
      },
    ],
    insufficientIngredients: [
      {
        id: 3,
        ingredient: 3,
      },
      {
        id: 4,
        ingredient: 4,
      },
    ],
    likeCount: 10,
  },
];
