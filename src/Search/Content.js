import "./Content.css";
import React, { useState, useEffect } from "react";
import ResultBox from "./ResultBox";

const Content = () => {
  const [searchingResultRecipes, setSearchingResultRecipes] = useState([]);

  useEffect(() => {
    setSearchingResultRecipes(searchingResultRecipeListData);
    searchingResultRecipes.map((element) => {
      const Id = element.id;
      window.localStorage.setItem(Id, false);
    });
  }, []);

  // 서버로 부터 요청 by axios

  return (
    <div className="search-content">
      <div className="result-container">
        <h1 className="select-result-title">레시피 검색 결과</h1>
        {searchingResultRecipes.map((element) => {
          return (
            <ResultBox
              id={element.id}
              name={element.name}
              description={element.description}
              imageUrl={element.imagePath}
              likeCount={element.likeCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;

// likeCount : 내가 추가한 항목
const searchingResultRecipeListData = [
  {
    id: 1,
    name: "토마토 파스타",
    description: "토마토 베이스인 파스타",
    imagePath: "/images/onion.jpg",
    likeCount: 10,
  },
  {
    id: 2,
    name: "해물 파스타",
    description: null,
    imagePath: "/images/1.jpg",
    likeCount: 0,
  },
  {
    id: 3,
    name: "그냥 파스타",
    description: "그냥",
    imagePath: "/images/party_noodle.jpg",
    likeCount: 0,
  },
];
