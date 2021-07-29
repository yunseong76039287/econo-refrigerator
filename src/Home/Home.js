import "./Home.css";
import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomeListSquare from "./HomeListSquare";
import ingredientData from "../data/ingredientData";
import Api from "../Api";

const Home = () => {
  const [randomRecipes, setRandomRecipes] = useState();
  const [randomIngredients, setRandomIngredients] = useState();

  useEffect(() => {
    initWithLocal();

    async function initWithServer() {
      const randomRecipes = await Api.get10RandomRecipes();
      setRandomRecipes(randomRecipes);
    }
    initWithServer();
  }, []);

  const initWithLocal = () => {
    get10RandomIngredients();
  };

  const get10RandomIngredients = () => {
    let random10Ingredients = [];

    const randomStartIdx = getRandomIngredientsStartIdx();
    for (let i = 0; i < 10; i++) {
      const idx = randomStartIdx + i;
      random10Ingredients.push(ingredientData.ingredientDataArray[idx]);
    }

    setRandomIngredients(random10Ingredients);
  };

  const getRandomIngredientsStartIdx = () => {
    const ingredientsSize = ingredientData.ingredientDataArray.length;
    const randomStartIdx = Math.round(Math.random() * (ingredientsSize - 11));
    if (randomStartIdx < 0) {
      randomStartIdx = 0;
    }

    return randomStartIdx;
  };

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
          {randomRecipes ? (
            randomRecipes.map(({ id, imagePath }) => {
              return (
                <HomeListSquare recipe key={id} id={id} imagePath={imagePath} />
              );
            })
          ) : (
            <CircularProgress />
          )}
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
          {randomIngredients ? (
            randomIngredients.map(({ id, imagePath }, index) => {
              if (index > 10) return;
              else
                return (
                  <HomeListSquare
                    ingredient
                    key={id}
                    id={id}
                    imagePath={imagePath}
                  />
                );
            })
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
