import axios from "axios";

const get10RandomRecipe = async () => {
  const url = process.env.REACT_APP_API_URL + "recipe/randomList";

  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export default { get10RandomRecipe };
