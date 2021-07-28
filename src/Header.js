import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link exact to="/">
        <span className="title">econo refrigerator</span>
      </Link>

      <Link to="/recommendation">
        <span className="menu">recommendation</span>
      </Link>

      <Link to="/exploration?ingredients=0">
        <span className="menu">exploration</span>
      </Link>
    </div>
  );
};

export default Header;
