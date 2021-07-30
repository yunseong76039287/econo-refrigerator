import React, { useState } from "react";
import "./Comment.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Api from "../Api";

const Comment = ({ recipeId, setComments }) => {
  const [isNameErr, setIsNameErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);
  const [isContentErr, setIsContentErr] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const submitComment = async () => {
    if (checkEmptyError()) {
      return;
    }

    const newComment = {
      author: name,
      content: content,
      password: password,
    };
    setComments((prev) => [...prev, newComment]);
    setName("");
    setPassword("");
    setContent("");

    const newCommentId = await Api.postComment(recipeId, newComment);
    if (newCommentId === undefined) {
      setComments((prev) => prev.splice(-1, 1));
    } else {
      setComments((prev) => {
        prev[prev.length - 1].id = newCommentId;

        return prev;
      });
    }
  };

  const checkEmptyError = () => {
    if (name === "") {
      setIsNameErr(true);
      return true;
    } else {
      setIsNameErr(false);
    }

    if (password === "") {
      setIsPasswordErr(true);
      return true;
    } else {
      setIsPasswordErr(false);
    }

    if (content === "") {
      setIsContentErr(true);
      return true;
    } else {
      setIsContentErr(false);
    }

    return false;
  };

  return (
    <div className="input-container">
      <div className="input-user-information">
        <TextField
          className="nickname"
          label="Outlined"
          variant="outlined"
          size="small"
          label="닉네임"
          type="text"
          required
          error={isNameErr}
          helperText={isNameErr ? "닉네임을 입력해주세요." : ""}
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        <TextField
          className="password"
          label="Outlined"
          variant="outlined"
          size="small"
          label="비밀번호"
          type="password"
          required
          error={isPasswordErr}
          helperText={isPasswordErr ? "올바르지 않은 비밀번호입니다." : ""}
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </div>
      <div className="input-contents-box">
        <TextField
          label="Multiline"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          label="댓글"
          type="text"
          required
          error={isContentErr}
          helperText={isPasswordErr ? "댓글을 입력해주세요." : ""}
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: 10 }}
          onClick={submitComment}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Comment;
