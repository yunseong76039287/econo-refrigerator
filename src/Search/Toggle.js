import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const Toggle = ({ likeToggleOn, setLikeToggleOn }) => {
  const handleClick = () => {
    console.log(likeToggleOn);
    return setLikeToggleOn(!likeToggleOn);
  };

  // 좋아요가 안눌렸을 때
  if (likeToggleOn === false) {
    return (
      <Button id="like-off" onClick={handleClick}>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </Button>
    );
  }
  return (
    <Button id="like-on" onClick={handleClick}>
      <FavoriteIcon></FavoriteIcon>
    </Button>
  );
};

export default Toggle;
