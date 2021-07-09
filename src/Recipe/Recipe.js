import React from "react";
import "./Recipe.css";

// description을 컴포넌트로 받아올 수 있나?

const Recipe = ({ name, imageSrc, introduction, description }) => {
  const str =
    "레시피의 설명을 서버로부터 받아옵니다.<br><br/> 1. 팬을 달굽니다.<br><br/> 2. 만든 양념을 약간 태워서 불맛을 냅니다.<br><br/> 3. 고기를 같이 볶습니다.<br><br/> 4. 고기를 볶은 후에 채소를 넣어줍니다.<br><br/> 5. 그렇게 합니다.<br><br/>";

  return (
    <div className="recipe">
      <h1 className="recipe-name">
        레시피 제목을 서버로부터 이곳에 받아옵니다.
      </h1>
      <div className="like">
        <p className="like-count">좋아요:</p>
        <button className="like-button">Like</button>
      </div>
      <img
        className="recipe-image"
        src="/images/test_img.jpeg"
        alt="대체 텍스트가 들어갈 곳"
      ></img>
      <h2>레시피 소개</h2>
      <div>
        introduction 을 서버로부터 받아옵니다. recipebox에 표시되는 레시피 간단
        설명과 같음!
      </div>
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
