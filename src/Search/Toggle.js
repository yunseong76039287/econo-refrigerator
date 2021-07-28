import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Api from "../Api";

const Toggle = ({ id, likeCount }) => {
  let [isPressed, setStatus] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    setCount(likeCount);
    if (
      JSON.parse(localStorage.getItem(id)) === null ||
      JSON.parse(localStorage.getItem(id)) === undefined
    ) {
      localStorage.setItem(id, JSON.stringify(false));
      setStatus(false);
    } else {
      setStatus(JSON.parse(localStorage.getItem(id)));
    }
  }, [likeCount]);

  const handleClick = async (event) => {
    if (isPressed === true) {
      await Api.unlikeRecipe(id);

      setCount(count - 1);
      window.localStorage.setItem(id, !isPressed);
    }
    if (isPressed === false) {
      await Api.likeRecipe(id);

      setCount(count + 1);
      window.localStorage.setItem(id, !isPressed);
    }
    return setStatus(!isPressed);
  };

  const changeIcon = (isPressed) => {
    if (isPressed === true) return <FavoriteIcon></FavoriteIcon>;
    else if (isPressed === false)
      return <FavoriteBorderIcon></FavoriteBorderIcon>;
    else return <FavoriteBorderIcon></FavoriteBorderIcon>;
  };

  return (
    <div className="like-button like-button-holder">
      <div className="like-button">{count}</div>
      <IconButton id="like-on" onClick={handleClick}>
        {changeIcon(isPressed)}
      </IconButton>
    </div>
  );
};

export default Toggle;
