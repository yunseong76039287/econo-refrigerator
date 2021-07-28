import "./Sidebar.css";
import React from "react";
import ingredientData from "../data/ingredientData";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import Search from "@material-ui/icons/Search";
import { useIngredientsId, useUnselectIngredient } from "../IngredientContext";
import { makeStyles } from "@material-ui/core/styles";

const Sidebar = () => {
  const refrigeratorIngredientsId = useIngredientsId();
  const unselectIngredient = useUnselectIngredient();

  const classes = useStyles();

  console.log("임시 저장소 : " + refrigeratorIngredientsId);
  console.log("selected에 저장된 값 : " + refrigeratorIngredientsId);

  const generateIngredientParam = () => {
    return refrigeratorIngredientsId.join(",");
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">냉장고</h1>
      <div style={{ width: "100%", height: "9px", background: "#235391" }} />
      <div style={{ width: "100%", height: "7px", background: "#d4e5ff" }} />
      <div style={{ width: "100%", height: "9px", background: "#235391" }} />

      {/* <div style={{ width: "100%", height: "3px", background: "white" }} /> */}
      <div className="sidebar-content">
        <div className="ingredient-list">
          {refrigeratorIngredientsId.map((ingredientId) => {
            const name = ingredientData.getIngredientNameById(ingredientId);
            return (
              <div className="ingredient-element" key={ingredientId}>
                <img
                  className="ingredient-pin"
                  src={"/images/ingredient_pin.png"}
                />
                {name}
                <IconButton
                  className={classes.myClassName}
                  onClick={() => unselectIngredient(ingredientId)}
                >
                  <DeleteIcon fontSize="medium" color="secondary" />
                </IconButton>
              </div>
            );
          })}
        </div>
        <Link
          to={"/search?ingredients=" + generateIngredientParam()}
          className="search-link"
        >
          <Search />
          <div className="search-link-text">레시피 추천 받기</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

const useStyles = makeStyles((theme) => ({
  myClassName: {
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "rgba(225, 49, 90, 0.1)",
    },
  },
}));
