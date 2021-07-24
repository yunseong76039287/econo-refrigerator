import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const Toggle = ({ id, likeCount }) => {
  let [count, setCount] = useState(likeCount);
  let [status, setStatus] = useState(localStorage.getItem(id));

  console.log(
    "likeCount 의 자료형 " + typeof likeCount + "likeCount :" + likeCount
  );
  console.log("status id: " + id + "," + status);

  // 아직 서버와 연동이 안되서 like Count를 서버에 동기화 하지 못함.
  const handleClick = (event) => {
    console.log("status type" + typeof status);

    if (status === true) {
      setCount(count - 1);
      setStatus(!status);
      window.localStorage.setItem(id, !status);
    }
    if (status === false) {
      setCount(count + 1);
      setStatus(!status);
      window.localStorage.setItem(id, !status);
    }
    return;
  };

  const changeIcon = (s) => {
    if (s === true) return <FavoriteIcon></FavoriteIcon>;
    else if (s === false) return <FavoriteBorderIcon></FavoriteBorderIcon>;
    else return <FavoriteBorderIcon></FavoriteBorderIcon>;
  };

  // 좋아요가 안눌렸을 때
  return (
    <Button id="like" onClick={handleClick}>
      <span>{count}</span>
      {changeIcon(status)}
    </Button>
  );
};

export default Toggle;
