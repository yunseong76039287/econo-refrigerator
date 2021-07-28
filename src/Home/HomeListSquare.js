import "./HomeListSquare.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeListSquare = ({ recipe, ingredient, id, imagePath }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    if (recipe) {
      setUrl("/recipe/" + id);
    }

    if (ingredient) {
      setUrl("/exploration?ingredients=" + id);
    }
  }, []);

  return (
    <Link to={url}>
      <div className="square">
        <img className="square-img" src={imagePath} />
      </div>
    </Link>
  );
};

export default HomeListSquare;
