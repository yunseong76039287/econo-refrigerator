import "./HomeListSquare.css";
import React from "react";

const HomeListSquare = ({ imageUrl }) => {
  return (
    <div className="square">
      <img className="square-img" src={imageUrl} />
    </div>
  );
};

export default HomeListSquare;
