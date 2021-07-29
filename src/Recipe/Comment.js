import React, { useState } from "react";
import "./Comment.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Comment = ({ setComments }) => {
  const [isNameErr, setIsNameErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);
  const [isContentErr, setIsContentErr] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const submitComment = () => {
    if (checkEmptyError()) {
      return;
    }

    const newComment = {
      author: name,
      password: password,
      content: content,
    };
    setComments((prev) => [...prev, newComment]);

    setName("");
    setPassword("");
    setContent("");
  };

  const checkEmptyError = () => {
    if (name === "") {
      setIsNameErr(true);
    }
    if (password === "") {
      setIsPasswordErr(true);
    }
    if (content === "") {
      setIsContentErr(true);
    }
    if (isNameErr || isPasswordErr || isContentErr) {
      return true;
    }

    setIsNameErr(false);
    setIsPasswordErr(false);
    setIsContentErr(false);
    return false;
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
          value={name}
          onChange={({ target: { value } }) => setName(value)}
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
          className="input-contents"
          label="댓글"
          type="text"
          required
          error={isContentErr}
          helperText={isPasswordErr ? "댓글을 입력해주세요." : ""}
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <Button
          variant="outlined"
          color="primary"
          className="submit-button"
          onClick={submitComment}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Comment;
