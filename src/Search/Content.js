import "./Content.css";
import React, { useState, useEffect } from "react";
import ResultBox from "./ResultBox";
import recipeData from "../data/recipeData";

const Content = () => {
  const [searchingResultRecipes, setSearchingResultRecipes] = useState([]);

  useEffect(() => {
    setSearchingResultRecipes(sufficientSearchResultRecipesData);
    searchingResultRecipes.map((element) => {
      const Id = element.id;
      console.log("처음에만 실행되나요?");
      if (
        localStorage.getItem(Id) === null ||
        localStorage.getItem(Id) === undefined
      ) {
        window.localStorage.setItem(Id, false);
      }
    });
  }, []);

  // 서버로 부터 요청 by axios

  return (
    <div className="search-content">
      <div className="search-result-holder">
        <h1 className="search-result-title">우리가 추천하는 레시피는...</h1>
        {sufficientSearchResultRecipesData.map((element) => {
          return (
            <ResultBox
              id={element.id}
              name={element.name}
              description={element.description}
              ingredients={element.ingredients}
              imageUrl={element.imagePath}
              likeCount={element.likeCount}
            />
          );
        })}
      </div>

      <div className="search-result-holder">
        <h1 className="search-result-title">
          재료가 조금만 더 있으면 이것도 가능해요!
        </h1>
        {insufficientSearchResultRecipesData.map((element) => {
          return (
            <ResultBox
              id={element.id}
              name={element.name}
              description={element.description}
              ingredients={element.ingredients}
              insufficientIngredients={element.insufficientIngredients}
              imageUrl={element.imagePath}
              likeCount={element.likeCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;

// likeCount : 내가 추가한 항목
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
