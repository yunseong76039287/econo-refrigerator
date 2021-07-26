import React, { useState } from "react";
import "./Comment.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Comment = ({ recipeData, setRecipeData }) => {
  const [isNameErr, setIsNameErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);
  const [isContentsErr, setIsContentsErr] = useState(false);

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
      setIsNameErr(true);
      return;
    }
    if (tempPassword === "") {
      setIsPasswordErr(true);
      return;
    }
    if (tempContents === "") {
      setIsContentsErr(true);
      return;
    }
    setIsNameErr(false);
    setIsPasswordErr(false);
    setIsContentsErr(false);

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
        <TextField
          label="Outlined"
          variant="outlined"
          className="nickname"
          label="닉네임"
          type="text"
          required
          error={isNameErr}
          helperText={isNameErr ? "닉네임을 입력해주세요." : ""}
          onChange={getTargetName}
        />
        <TextField
          label="Outlined"
          variant="outlined"
          className="password"
          label="비밀번호"
          type="password"
          required
          error={isPasswordErr}
          helperText={isPasswordErr ? "올바르지 않은 비밀번호입니다." : ""}
          onChange={getTargetPassword}
        />
      </div>
      <div className="input-contents-box">
        <TextField
          label="Multiline"
          variant="outlined"
          multiline
          rows={4}
          className="input-contents"
          label="댓글"
          type="text"
          required
          error={isContentsErr}
          helperText={isPasswordErr ? "댓글을 입력해주세요." : ""}
          onChange={getTargetContents}
        />
        <Button
          variant="outlined"
          color="primary"
          className="submit-button"
          onClick={handleInput}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Comment;
