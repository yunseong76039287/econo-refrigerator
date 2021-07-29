import "./Sidebar.css";
import React from "react";
import ingredientData from "../data/ingredientData";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import Search from "@material-ui/icons/Search";
import { useIngredientsId, useUnselectIngredient } from "../IngredientContext";

const Sidebar = () => {
  const refrigeratorIngredientsId = useIngredientsId();
  const unselectIngredient = useUnselectIngredient();

  const generateIngredientParam = () => {
    return refrigeratorIngredientsId.join(",");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">냉장고</div>
      <div style={{ width: "100%", height: "9px", background: "#235391" }} />
      <div style={{ width: "100%", height: "7px", background: "#d4e5ff" }} />
      <div style={{ width: "100%", height: "9px", background: "#235391" }} />

      {/* <div style={{ width: "100%", height: "3px", background: "white" }} /> */}
      <div className="sidebar-content">
        <div className="selected-ingredient-list">
          {refrigeratorIngredientsId.map((ingredientId) => {
            const name = ingredientData.getIngredientNameById(ingredientId);
            return (
              <div className="selected-ingredient-element" key={ingredientId}>
                <img
                  className="selected-ingredient-pin"
                  src={"/images/ingredient_pin.png"}
                />
                <div className="selected-ingredient-name">{name}</div>
                <IconButton
                  className="selected-delete-button"
                  color="secondary"
                  onClick={() => unselectIngredient(ingredientId)}
                >
                  <DeleteIcon
                    style={{ fontSize: "min(max(15px, 2.1vw), 30px)" }}
                    color="secondary"
                  />
                </IconButton>
              </div>
            );
          })}
        </div>
        <Link
          to={"/search?ingredients=" + generateIngredientParam()}
          className="search-link"
        >
          <Search
            style={{
              fontSize: "min(max(15px, 2.1vw), 30px)",
              color: "#f7d556",
            }}
          />
          <div className="search-link-text">레시피 추천 받기</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
