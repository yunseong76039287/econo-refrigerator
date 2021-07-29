import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link exact to="/" className="title">
        <div>econo refrigerator</div>
      </Link>

      <Link to="/recommendation" className="menu">
        <div>recommendation</div>
      </Link>

      <Link to="/explore?ingredients=0" className="menu">
        <div>explore</div>
      </Link>
    </div>
  );
};

export default Header;
