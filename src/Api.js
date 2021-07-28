import axios from "axios";

async function getRecipeById(id) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + id;

  const result = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return undefined;
    });

  return result;
}

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
    "recipe/sufficientSearch" +
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

async function searchInsufficientRecipes(ingredientsParam) {
  const url =
    process.env.REACT_APP_API_URL +
    "recipe/insufficientSearch" +
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

async function likeRecipe(id) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + id + "/like";

  await axios.put(url).catch(function (error) {
    console.log(error);
  });
}

async function unlikeRecipe(id) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + id + "/unlike";

  await axios.put(url).catch(function (error) {
    console.log(error);
  });
}

export default {
  getRecipeById,
  get10RandomRecipes,
  searchSufficientRecipes,
  searchInsufficientRecipes,
  likeRecipe,
  unlikeRecipe,
};
