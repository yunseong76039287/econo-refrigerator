import React, { useState, useEffect } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
import ingredientData from "../data/ingredientData";
// description을 컴포넌트로 받아올 수 있나?

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => setRecipeData(recipeListData), []);

  return (
    <div className="recipe">
      <h1 className="recipe-name">{recipeData.name}</h1>
      <div className="like">
        <p className="like-count">좋아요:</p>
        <button className="like-button">Like</button>
      </div>
      <img
        className="recipe-image"
        src={recipeData.imageUrl}
        alt="대체 텍스트가 들어갈 곳"
      ></img>
      <h2>레시피 소개</h2>
      <div>{recipeData.description}</div>
      <h2>필요한 재료!</h2>
      <div className="recipe-ingredient">
        {recipeData.ingredients &&
          recipeData.ingredients.map((e) => {
            return <span>{ingredientData.getIngredientNameById(e.id)}</span>;
          })}
      </div>
      <h2>레시피 설명</h2>
      <div className="recipe-description">
        {recipeData.steps &&
          recipeData.steps.map((e) => {
            return (
              <div>
                <img src={e.imagePath}></img>
                <div>{e.description}</div>
              </div>
            );
          })}
      </div>

      <h3 className="comment-header">Comment</h3>
      <div className="comment-container">
        {recipeData.comments &&
          recipeData.comments.map((e) => {
            return <div className="comment-box"></div>;
          })}
      </div>

      <Link to="/search">뒤로가기</Link>
    </div>
  );
};

export default Recipe;

const recipeListData = {
  id: 1,
  name: "토마토 파스타",
  description: "토마토를 곁들인 매콤달콤 파스타",
  imageUrl: "/images/test_pasta.jpg",
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
  steps: [
    {
      id: 1,
      description: "1. 면을 삶는다.",
      imagePath: "/images/1.jpg",
    },
    {
      id: 2,
      description: "1. 소스를 만든다.",
      imagePath: "/images/test_img.jpeg",
    },
  ],
  likeCount: 0,
  comments: [
    {
      id: 1,
      author: "guest01",
      content: "좋아요",
      password: "1234",
    },
  ],
};
