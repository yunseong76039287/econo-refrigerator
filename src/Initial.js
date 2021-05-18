import React, { useState } from "react";
import Header from "./Home/Header";
import Sidebar from "./Home/Sidebar";
import "./Initial.css";
import Contents from "./Home/Contents";
import Search from "./Search/Search";

const Initial = () => {
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
      {/* <Contents
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        /> 
         */}
         <Search />
        {/*페이지가 이동할 때 마다, 해당 구역에 호출되는 컴포넌트가 바뀌게 만들 수 있는지?? */}
      </div>
      </div>
    </div>
  );
};

export default Initial;
