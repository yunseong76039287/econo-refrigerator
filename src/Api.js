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

async function get10RecipeWithOffset(offset) {
  const url = process.env.REACT_APP_API_URL + "recipe/list/" + offset;

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

async function likeRecipe(recipeId) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + recipeId + "/like";

  await axios.put(url).catch(function (error) {
    console.log(error);
  });
}

async function unlikeRecipe(recipeId) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + recipeId + "/unlike";

  await axios.put(url).catch(function (error) {
    console.log(error);
  });
}

async function postComment(recipeId, comment) {
  const url = process.env.REACT_APP_API_URL + "recipe/" + recipeId + "/comment";
  // const url = "http://localhost:8080/recipe/" + 1 + "/comment";

  console.log(comment);
  const result = await axios
    .post(url, comment)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return undefined;
    });

  return result;
}

async function deleteComment(commentId, password) {
  const url =
    process.env.REACT_APP_API_URL + "comment/" + commentId + "/" + password;

  const result = await axios
    .delete(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return undefined;
    });

  return result;
}

export default {
  getRecipeById,
  get10RecipeWithOffset,
  get10RandomRecipes,
  searchSufficientRecipes,
  searchInsufficientRecipes,
  likeRecipe,
  unlikeRecipe,
  postComment,
  deleteComment,
};
