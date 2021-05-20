import React from "react";
import SelectResult from "./SearchResult";
import "./Content.css";

// 검색창을 재사용 할 수 있는지?
const Content = () => {
  return (
    <div className="search-content">
      <SelectResult />
    </div>
  );
};

export default Content;
