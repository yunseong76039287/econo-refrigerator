import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link exact to="/">
        <span className="title">econo 냉장고</span>
      </Link>
    </div>
  );
};

export default Header;
