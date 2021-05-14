import React from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import Header from "./Header";
import Contents from "./Contents";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Contents />
    </div>
  );
};

export default Home;
