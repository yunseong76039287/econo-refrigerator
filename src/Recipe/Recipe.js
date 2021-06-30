import React from "react";
import "./Recipe.css";

// description을 컴포넌트로 받아올 수 있나?

const Recipe = ({ name, imageSrc, description, count }) => {
  const str =
    "레시피의 설명이 들어갈 곳<br><br/> 1. 팬을 달굽니다.<br><br/> 2. 만든 양념을 약간 태워서 불맛을 냅니다.<br><br/> 3. 고기를 같이 볶습니다.<br><br/> 4. 고기를 볶은 후에 채소를 넣어줍니다.<br><br/> 5. 그렇게 합니다.<br><br/>";
  const CountUp = () => {
    count++;
  };
  return (
    <div className="recipe">
      <h1 className="recipe-name">레시피 제목으로 name</h1>
      <div className="like">
        <p className="like-count">좋아요:{count}</p>
        <button className="like-button">Like</button>
      </div>
      <img
        className="recipe-image"
        src="https://recipe1.ezmember.co.kr/cache/recipe/2015/05/27/38013d1dfd8fa46a871b9cda074b26341.jpg"
        alt="대체 텍스트가 들어갈 곳"
      ></img>
      <h2>필요한 재료!</h2>
      <div className="recipe-ingredient">양파 간장 상추 돼지고기 100g </div>
      <h2>레시피 설명</h2>
      <div
        className="recipe-description"
        dangerouslySetInnerHTML={{ __html: str }}
      />
    </div>
  );
};

export default Recipe;
