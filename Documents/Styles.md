# Styles
이 문서에서는 에코노 냉장고에서 사용된 css를 기술합니다.

나중에 비슷한 레이아웃을 구현할 때 사용하기 위해 제작하였습니다.
  - [메인 페이지](#메인-페이지)
  - [재료 선택 페이지](#재료-선택-페이지)
  - [레시피 검색 페이지](#레시피-검색-페이지)
  - [레시피 페이지](#레시피-페이지)

## 메인 페이지
랜덤으로 추천해주는 레시피와 재료를 가로로 보여줍니다.
`Home.css`
```css
.home-list-mapping {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 18px;
  padding-left: 3%;
  overflow: hidden;
}

.home-list-mapping:hover {
  overflow: scroll;
}
```
요소들을 가로로 보여주기 위해 `flex` 를 사용하고, `justify-content:flex-start`를 이용해 flex 컨테이너의 앞쪽부터 배치했습니다.

요소들이 화면을 넘어갈 정도로 많아졌을 경우를 대비해 `overflow:hidden` 을 이용해 넘친 요소들은 숨기고,
`home-list-mapping:hover`에서 스크롤이 될 수 있게 구현 하였습니다.

## 재료 선택 페이지
레시피를 만들기 위한 여러가지 재료를 냉장고에 추가하는 페이지입니다.

`IngredientSquare.css`
```css
.ingredient-container {
  display: grid;
  height: calc(100vh - 82px);
  margin-top: 0px;
  padding-top: 30px;
  padding-left: 30px;

  grid-template-rows: repeat(
    5,
    minmax(230px, 230px)
  ); 
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 250px)
  );
  gap: 20px;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
}
```
`grid`를 사용하여 재료를 격자형으로 보여줄 수 있게 구현하였습니다. page는 브라우저 크기에 맞추기 위해 viewPort를 기준으로 높이를 맞추었습니다.

`sidebar.css`

```css
.selected-ingredient-list {
  width: 100%;
  height: 63vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 20px;
  overflow: hidden;
}

.selected-ingredient-list:hover {
  overflow-y: scroll;
}
```

사이드바에 구현되어 있는 냉장고는 재료가 많아지면 검색 버튼이 뭍힌다는 설계 오류가 있었습니다. 이는 앞서 [메인 페이지](#메인-페이지) 에서 사용한 `overflow`를 통해 해결하였습니다.

## 레시피 검색 페이지


## 레시피 페이지

