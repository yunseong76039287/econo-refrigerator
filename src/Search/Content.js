import React, { useState } from "react";
import SelectResult from "./SearchResult";
import Sidebar from "../Home/Sidebar";
import "./Content.css";

// 검색창을 재사용 할 수 있는지?
const Content = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <div className="search-content">
      <SelectResult />
    </div>
  );
};

export default Content;
