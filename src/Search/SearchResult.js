import React from "react";
import "./SearchResult.css";

const SelectResult = () => {
  return (
    <div className="result-container">
      <h1 id="select-result-title">레시피 검색 결과</h1>
      <div className="result-box">
        <img src={"/images/test_pasta.jpg"} alt="pasta" />
        <div className="text-content">
          <h3>토마토 파스타</h3>
          <p id="preview"> 간단하게 만들 수 있는 파스타. 만드는 법.. 재료 넣고 섞고 돌리고..
            하다보면 만들어지는 쉬운 파스타입니다. 누구나 쉽게 만들 수 있어요. 그럼
            지금부터 만들어볼까요??
          </p>
        </div>
        <button id="like">❤</button>
      </div>

      <div className="result-box">
        <img src={"/images/party_noodle.jpg"} alt="noodle" />
        <div className="text-content">
          <h3>잔치국수</h3>
          <p id="preview"> 국수 대신 라면면을 넣어도 되고요. 멸치 같은거 없어도 됩니다.(사실 있어야
            합니다. ) 간단히 먹을 수 있습니다. 여기에 김치에 김밥 + 잔치국수 먹으면 김밥천국 안가도 됩니다.
          </p>
        </div>
        <button id="like">❤</button>
      </div>

      <div className="result-box">
        <img src={"/images/spam_egg_rice.jpg"} alt="rice" />
        <div className="text-content">
          <h3>스팸덮밥 with 반숙</h3>
          <p id="preview"> 자취생의 필수 템인 스팸 + 계란 + 밥의 환상조합입니다. 스팸을 듬뿍 넣으신 만큼
            밥도 듬뿍 넣어주셔야 짜지않습니다. 계란을 익히는 법은 나중에 공개할께요.
          </p>
        </div>
        <button id="like">❤</button>
        {/* 클릭하면 넘어가는 링크 */}
      </div>
    </div>
  );
};

export default SelectResult;
