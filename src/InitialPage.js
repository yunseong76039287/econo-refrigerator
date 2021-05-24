import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./InitialPage.css";
import Home from "./Home/Home";
import Search from "./Search/Search";

const InitialPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <div className="initial">
      <Header />
      <div className="contentsbody">
        <Sidebar
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <div className="page">
          {/* <Home
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        /> 
         */}
          <Search />
          {/* react router : 페이지 전환하는 개념.. react-router-dom : 페이지 전환  */}
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
