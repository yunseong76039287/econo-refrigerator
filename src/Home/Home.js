import "./Home.css";
import React from "react";
import HomeListSquare from "./HomeListSquare";
import ingredientData from "../data/ingredientData";
import recipeData from "../data/recipeData";

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
          <HomeListSquare imageUrl={"/images/asparagusBeef/main.jpg"} />
          <HomeListSquare imageUrl={"/images/friedEggplant/main.jpg"} />
          <HomeListSquare imageUrl={"/images/lettuceGeotjeorl/main.jpg"} />
          <HomeListSquare imageUrl={"/images/eggJangjorim/main.jpg"} />
          <HomeListSquare
            imageUrl={"/images/marbledSoybeanPasteStew/main.jpg"}
          />
          <HomeListSquare imageUrl={"/images/asparagusGarlicFried/main.jpeg"} />
          <HomeListSquare imageUrl={"/images/squashRamen/main.jpeg"} />
          <HomeListSquare
            imageUrl={"/images/bokchoyChivesShrimpRice/main.jpg"}
          />
        </div>
      </div>
      <div className="home-ingredient-list home-list">
        <div className="home-list-titles">
          <div className="home-ingredient-list-title home-list-title">
            이 재료들로 만든 레시피는 어떤가요?
          </div>
          <div className="home-list-subtitle">Ingredient</div>
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
