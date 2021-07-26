import React from "react";
import "./Comment.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Comment = ({ recipeData, setRecipeData }) => {
  let tempName = "";
  let tempPassword = "";
  let tempContents = "";
  const getTargetName = (event) => {
    tempName = event.target.value;
    console.log("name :" + tempName);
  };

  const getTargetPassword = (event) => {
    tempPassword = event.target.value;
    console.log("password :" + tempPassword);
  };

  const getTargetContents = (event) => {
    tempContents = event.target.value;
    console.log("comment contents : " + tempContents);
  };

  const handleInput = () => {
    if (tempName === "") {
      alert("이름을 다시 한번 확인해주세요.");
      return 0;
    }
    if (tempPassword === "") {
      alert("비밀번호를 다시 한번 확인해주세요.");
      return 0;
    }
    if (tempContents === "") {
      alert("내용을 입력하세요.");
      return 0;
    }

    let copyRecipeData = recipeData;
    let existComments = recipeData.comments;
    let countComment = recipeData.comments.length;
    let newComment;

    console.log("현재 존재하는 댓글");
    console.log(existComments);
    console.log("댓글의 개수");
    console.log(countComment);

    countComment = countComment + 1;
    newComment = {
      id: countComment,
      author: tempName,
      content: tempContents,
      password: tempPassword,
    };
    existComments.push(newComment);

    copyRecipeData.comments = existComments;
    setRecipeData(copyRecipeData);
    console.log("새로운 댓글을 포함한 결과");
    console.log(existComments);
    console.log("recipeData update 상태");
    console.log(recipeData.comments);
    console.log("call handleInput.");
    tempName = "";
    tempPassword = "";
    tempContents = "";
  };

  return (
    <div className="input-container">
      <div className="input-user-information">
        <input
          className="nickname"
          type="text"
          placeholder="닉네임"
          onChange={getTargetName}
        ></input>
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={getTargetPassword}
        ></input>
      </div>
      <div className="input-contents-box">
        <input
          className="input-contents"
          type="text"
          placeholder="댓글을 이곳에 작성해주세요 ..."
          onChange={getTargetContents}
        ></input>
        <Button
          variant="outlined"
          className="submit-button"
          onClick={handleInput}
          style={{
            height: "75px",
            margin: "10px",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Comment;
