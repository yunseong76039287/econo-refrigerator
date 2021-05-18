import React from "react";
import "./SearchResult.css";

const SelectResult = () => {
  return (
    <div className="result-container">
      <div className="result-box">
        <img src={"/images/test_pasta.jpg"} alt="pasta" />
        <p>This is pasta</p>
        <button>Like</button>
        {/* 클릭하면 넘어가는 링크 */}
      </div>
      <div className="result-box">
        <img src={"/images/test_pasta.jpg"} alt="pasta" />
        <p>This is pasta</p>
        <button>Like</button>
        {/* 클릭하면 넘어가는 링크 */}
      </div>
      <div className="result-box">
        <img src={"/images/test_pasta.jpg"} alt="pasta" />
        <p>This is pasta</p>
        <button>Like</button>
        {/* 클릭하면 넘어가는 링크 */}
      </div>
    </div>
  );
};

export default SelectResult;
