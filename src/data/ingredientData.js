const ingredientDataArray = [
  {
    id : "test",
    name : "Testname",
    imageUrl : "/images/ingredientImgData"
  },
  {
    id : 1,
    name : "밥",
    imageUrl : "/images/ingredientImgData/rice.jpg"
  },
  {
    id : 2,
    name : "감자",
    imageUrl : "/images/ingredientImgData/potato.jpg"
  },
  {
    id : 3,
    name : "고구마",
    imageUrl : "/images/ingredientImgData/sweet_potato.jpg"
  },
  {
    id : 4,
    name : "라면사리",
    imageUrl : "/images/ingredientImgData/ramen_noodles.jpg"
  },
  {
    id : 5,
    name : "당면",
    imageUrl : "/images/ingredientImgData/glass_noodles.jpg"
  },
  {
    id : 6,
    name : "가래떡",
    imageUrl : ""
  },
  {
    id : 7,
    name : "빵가루",
    imageUrl : ""
  },
  {
    id : 8,
    name : "전분",
    imageUrl : ""
  },
  {
    id : 9,
    name : "옥수수",
    imageUrl : "/images/ingredientImgData/corn.jpg"
  },
  {
    id : 10,
    name : "밀가루(강력)",
    imageUrl : ""
  },
  {
    id : 11,
    name : "밀가루(중력)",
    imageUrl : ""
  },
  {
    id : 12,
    name : "밀가루(박력)",
    imageUrl : ""
  },

  {
    id : 31,
    name : "대파",
    imageUrl : "/images/ingredientImgData/greenonion.jpg"
  },
  {
    id : 32,
    name : "양파",
    imageUrl : "/images/ingredientImgData/onion.jpg"
  },
  {
    id : 33,
    name : "마늘",
    imageUrl : "/images/ingredientImgData/garlic.jpg"
  },
  {
    id : 34,
    name : "다진마늘",
    imageUrl : ""
  },
  {
    id : 35,
    name : "오이",
    imageUrl : "/images/ingredientImgData/cucumbers.jpg"
  },
  {
    id : 36,
    name : "청경채",
    imageUrl : "/images/ingredientImgData/bokchoy.jpg"
  },
  {
    id : 37,
    name : "부추",
    imageUrl : "/images/ingredientImgData/chives.jpg"
  },

  {
    id : 101,
    name : "고추장",
    imageUrl : "/images/ingredientImgData/gochujang.jpg"
  },
  {
    id : 102,
    name : "된장",
    imageUrl : "/images/ingredientImgData/doenjang.jpg"
  },
  {
    id : 103,
    name : "간장",
    imageUrl : "/images/ingredientImgData/soysauce.jpg"
  },
  {
    id : 104,
    name : "초고추장",
    imageUrl : "/images/ingredientImgData/chogochujang.jpg"
  },
  {
    id : 105,
    name : "설탕",
    imageUrl : "/images/ingredientImgData/sugar.jpg"
  },
];

// 재료의 id 매개변수 받고, 그 id 의 재료 이름 반환하는 함수
const getIngredientNameById = (id) => {
  const idName = ingredientDataArray.find((element) => {
    if (element.id === id) {
      return true;
    }
    return false;
  });

  return idName.name;
};

export default { ingredientDataArray, getIngredientNameById };
