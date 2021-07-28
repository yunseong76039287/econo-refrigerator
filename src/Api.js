import axios from "axios";

async function get10RandomRecipes() {
  const url = process.env.REACT_APP_API_URL + "recipe/randomList";

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

async function searchSufficientRecipes(ingredientsParam) {
  const url =
    process.env.REACT_APP_API_URL +
    "recipe/sufficientSearch?" +
    ingredientsParam;

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

async function searchInsufficientRecipes(ingredientsDataFormat) {
  const url = process.env.REACT_APP_API_URL + "/api/recipe/insufficientSearch";

  const result = await axios
    .get(url, {
      headers: { "Access-Control-Allow-Origin": true },
      data: {
        recipeIngredientDtos: ingredientsDataFormat,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return result;
}

export default {
  get10RandomRecipes,
  searchSufficientRecipes,
  searchInsufficientRecipes,
};
