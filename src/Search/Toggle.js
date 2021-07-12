import React, { useState } from "react";

const Toggle = ({ likeToggleOn, setLikeToggleOn }) => {
  const handleClick = () => {
    console.log(likeToggleOn);
    return setLikeToggleOn(!likeToggleOn);
  };

  // 좋아요가 안눌렸을 때
  if (likeToggleOn === false) {
    return (
      <button id="like-off" onClick={handleClick}>
        like
      </button>
    );
  }
  return (
    <button id="like-on" onClick={handleClick}>
      like
    </button>
  );
};

export default Toggle;
