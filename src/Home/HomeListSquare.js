import "./HomeListSquare.css";
import React from "react";

const HomeListSquare = ({ imagePath }) => {
  return (
    <div className="square">
      <img className="square-img" src={imagePath} />
    </div>
  );
};

export default HomeListSquare;
