import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const Toggle = ({ id, likeCount }) => {
  console.log(
    "likeCount 의 자료형 " + typeof likeCount + "likeCount :" + likeCount
  );
  let [count, setCount] = useState(0);
  let [status, setStatus] = useState(localStorage.getItem(id));

  useEffect(() => {
    setCount(likeCount);
  }, [likeCount]);
  console.log("count에 담긴 값 : " + count);
  console.log(
    "local storage에 담긴 boolean 값 id : " +
      id +
      "boolean 값 : " +
      localStorage.getItem(id)
  );
  console.log("status 에 담긴 값 : " + id + "," + status);

  // 아직 서버와 연동이 안되서 like Count를 서버에 동기화 하지 못함.
  const handleClick = () => {
    console.log("status type" + typeof status);
    if (status === true) {
      setCount(count - 1);
      window.localStorage.setItem(id, !status);
    }
    if (status === false) {
      setCount(count + 1);
      window.localStorage.setItem(id, !status);
    }
    return setStatus(!status);
  };

  // 좋아요가 안눌렸을 때
  if (status === true) {
    console.log("false입니다.");
    return (
      <Button id="like-on" onClick={handleClick}>
        <span>{count}</span>
        <FavoriteIcon></FavoriteIcon>
      </Button>
    );
  } else {
    return (
      <Button id="like-off" onClick={handleClick}>
        <span>{count}</span>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </Button>
    );
  }
};

export default Toggle;
