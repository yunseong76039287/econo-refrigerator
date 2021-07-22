import React from "react";
import ingredientData from "../data/ingredientData";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Sidebar = ({
  refrigeratorIngredientsId,
  selectIngredient,
  setRefrigeratorIngredientsId,
  deleteIngredient,
}) => {
  // localStorage 초기화
  let firstCheck = [];
  firstCheck = window.localStorage.getItem("refrigerator");
  if (firstCheck === null) {
    window.localStorage.setItem(
      "refrigerator",
      JSON.stringify(refrigeratorIngredientsId)
    );
  }
  //localstorage에서 받은 값을 selectedIngredient에 저장하는법?
  console.log("임시 저장소 : " + refrigeratorIngredientsId);
  console.log("selected에 저장된 값 : " + refrigeratorIngredientsId);

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">냉장고</h1>
      <div className="sidebar-content">
        <ul className="ingredient-list">
          {refrigeratorIngredientsId.map((ingredientId) => {
            const name = ingredientData.getIngredientNameById(ingredientId);
            return (
              <li key={ingredientId}>
                <div className="ingredient-element">
                  {name}
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => deleteIngredient(this, ingredientId)}
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
