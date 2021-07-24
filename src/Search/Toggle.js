import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const Toggle = ({ id, likeCount }) => {
  let [status, setStatus] = useState(false);
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

  console.log("id값 : " + id);
  console.log("id type : " + typeof id);
  console.log("likeCount값 : " + count);
  console.log("likeCount type : " + typeof count);
  console.log("localstorage에 저장된 값 : " + status);
  console.log("---------- ");
  // 아직 서버와 연동이 안되서 like Count를 서버에 동기화 하지 못함.
  const handleClick = (event) => {
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

  const changeIcon = (s) => {
    if (s === true) return <FavoriteIcon></FavoriteIcon>;
    else if (s === false) return <FavoriteBorderIcon></FavoriteBorderIcon>;
    else return <FavoriteBorderIcon></FavoriteBorderIcon>;
  };

  const shownLikeCount = (cnt) => {
    return <span>{cnt}</span>;
  };

  // 좋아요가 안눌렸을 때
  return (
    <Button id="like" onClick={handleClick}>
      {shownLikeCount(count)}
      {changeIcon(status)}
    </Button>
  );
};

export default Toggle;
