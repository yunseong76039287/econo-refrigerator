import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./Initial.css";
import Contents from "./Home/Contents";
const Initial = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <div className="initial">
      <Header />
      <Sidebar
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
      <div className="page">
        <Contents
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        {/*페이지가 이동할 때 마다, 해당 구역에 호출되는 컴포넌트가 바뀌게 만들 수 있는지?? */}
      </div>
    </div>
  );
};

export default Initial;
