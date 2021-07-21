import React from "react";
import ingredientData from "../data/ingredientData";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Sidebar = ({
  refrigeratorIngredients,
  selectIngredient,
  setRefrigeratorIngredients,
}) => {
  // localStorage 초기화
  let firstCheck = [];
  firstCheck = window.localStorage.getItem("refrigerator");
  if (firstCheck === null) {
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(refrigeratorIngredients)
    );
  }
  //localstorage에서 받은 값을 selectedIngredient에 저장하는법?
  console.log("임시 저장소 : " + refrigeratorIngredients);
  console.log("selected에 저장된 값 : " + refrigeratorIngredients);

  const deleteIngredient = (event, id) => {
    const removeTarget = refrigeratorIngredients.find((element) => {
      if (element === id) return true;
      return false;
    });
    console.log(removeTarget);
    // removeTarget을 찾았으니 hook의 state를 변화시키자. (filter 사용)
    const newRefrigeratorIngredients = refrigeratorIngredients.filter(
      (element) => element !== removeTarget
    );
    console.log(newRefrigeratorIngredients);
    setRefrigeratorIngredients(newRefrigeratorIngredients);
    // localStorage 갱신.
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(newRefrigeratorIngredients)
    );
    return 0;
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">냉장고</h1>
      <div className="sidebar-content">
        <ul className="ingredient-list">
          {refrigeratorIngredients.map((selected) => {
            const name = ingredientData.getIngredientNameById(selected);
            return (
              <li>
                <div className="ingredient-element">
                  {name}
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => deleteIngredient(this, selected)}
                    disable
                  >
                    <DeleteIcon
                      className="sidebar-delete-button"
                      fontSize="medium"
                    ></DeleteIcon>
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
        <Link to="/search" className="search-link">
          레시피 보러 가기
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
