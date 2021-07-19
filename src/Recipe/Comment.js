import React from "react";
import "./Comment.css";

const Comment = ({ getInput, recipeData, setRecipeData }) => {
  let tempName;
  let tempPassword;
  let tempContents;
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
    let copyRecipeData = recipeData;
    let existComments = recipeData.comments;
    let countComment = recipeData.comments.length;
    let newComment;
    // console.log(typeof existComments);
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
    //hook에 넣어줘야 함.
  };

  return (
    <div className="input-container">
      <div className="user-infomation">
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
      <input
        className="comment-contents"
        type="text"
        placeholder="댓글을 이곳에 작성해주세요 ..."
        onChange={getTargetContents}
      ></input>
      <button onClick={handleInput}>작성 작성</button>
    </div>
  );
};

export default Comment;
