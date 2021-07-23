import "./Home.css";
import React from "react";
import HomeListSquare from "./HomeListSquare";
import ingredientData from "../data/ingredientData";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <img
          className="home-header-img"
          src={"/images/home_background.jpg"}
          width="5662"
          height="3775"
        />
        <div className="home-header-over">
          <div className="home-header-over-title">
            당신의 요리 경험을 향상시키세요.
          </div>
        </div>
      </div>
      <div className="home-recipe-list home-list">
        <div className="home-list-titles">
          <div className="home-list-title">오늘은 이런 레시피가 어때요?</div>
          <div className="home-list-subtitle">Recipe</div>
        </div>
        <div className="home-recipe-list-mapping home-list-mapping">
          <HomeListSquare imageUrl={"/images/test/recipe1.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe2.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe3.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe4.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe5.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe6.jpg"} />
          <HomeListSquare imageUrl={"/images/test/recipe7.jpg"} />
        </div>
      </div>
      <div className="home-ingredient-list home-list">
        <div className="home-ingredient-list-title home-list-title">
          이런 재료들은 가지고 있나요?
        </div>
        <div className="home-ingredient-list-mapping home-list-mapping">
          {ingredientData.ingredientDataArray.map(({ imageUrl }, index) => {
            if (index > 10) return;
            else return <HomeListSquare key={index} imageUrl={imageUrl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
