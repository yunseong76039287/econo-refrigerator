import axios from "axios";

async function get10RandomRecipes() {
  const url = process.env.REACT_APP_API_URL + "recipe/randomList";

  const data = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });

  return data;
}

export default { get10RandomRecipes };
