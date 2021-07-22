// only for front

const ingredientDataArray = [
  {
    id: "test",
    name: "Testname",
    imageUrl: "/images/ingredientImgData",
  },
  {
    id: 1,
    name: "밥",
    imageUrl: "/images/ingredientImgData/rice.jpg",
  },
  {
    id: 2,
    name: "감자",
    imageUrl: "/images/ingredientImgData/potato.jpg",
  },
  {
    id: 3,
    name: "고구마",
    imageUrl: "/images/ingredientImgData/sweet_potato.jpg",
  },
  {
    id: 4,
    name: "라면사리",
    imageUrl: "/images/ingredientImgData/ramen_noodles.jpg",
  },
  {
    id: 5,
    name: "당면",
    imageUrl: "/images/ingredientImgData/glass_noodles.jpg",
  },
  {
    id: 6,
    name: "가래떡",
    imageUrl: "/images/ingredientImgData/rice_cake.jpg",
  },
  {
    id: 7,
    name: "빵가루",
    imageUrl: "/images/ingredientImgData/bread_powder.jpg",
  },
  {
    id: 8,
    name: "전분",
    imageUrl: "/images/ingredientImgData/starch.jpg",
  },
  {
    id: 9,
    name: "옥수수",
    imageUrl: "/images/ingredientImgData/corn.jpg",
  },
  {
    id: 10,
    name: "밀가루(강력)",
    imageUrl: "/images/ingredientImgData/bread_flour.jpg",
  },
  {
    id: 11,
    name: "밀가루(중력)",
    imageUrl: "/images/ingredientImgData/plain_flour.jpg",
  },
  {
    id: 12,
    name: "밀가루(박력)",
    imageUrl: "/images/ingredientImgData/soft_flour.jpg",
  },
  {
    id: 31,
    name: "칼국수면",
    imageUrl: "/images/ingredientImgData/kalguksu.jpg",
  },
  {
    id: 32,
    name: "양파",
    imageUrl: "/images/ingredientImgData/onion.jpg",
  },
  {
    id: 33,
    name: "마늘",
    imageUrl: "/images/ingredientImgData/garlic.jpg",
  },
  {
    id: 34,
    name: "다진마늘",
    imageUrl: "/images/ingredientImgData/chopped_garlic.jpg",
  },
  {
    id: 35,
    name: "오이",
    imageUrl: "/images/ingredientImgData/cucumbers.jpg",
  },
  {
    id: 36,
    name: "청경채",
    imageUrl: "/images/ingredientImgData/bokchoy.jpg",
  },
  {
    id: 37,
    name: "부추",
    imageUrl: "/images/ingredientImgData/chives.jpg",
  },
  {
    id: 38,
    name: "배추",
    imageUrl: "/images/ingredientImgData/kimchi_cabbage.jpg",
  },
  {
    id: 39,
    name: "양배추",
    imageUrl: "/images/ingredientImgData/cabbage.jpg",
  },
  {
    id: 40,
    name: "적상추",
    imageUrl: "/images/ingredientImgData/red_lettuce.jpg",
  },
  {
    id: 41,
    name: "깻잎",
    imageUrl: "/images/ingredientImgData/perilla_leaf.jpg",
  },
  {
    id: 42,
    name: "무",
    imageUrl: "/images/ingredientImgData/radish.jpg",
  },
  {
    id: 43,
    name: "청양고추",
    imageUrl: "/images/ingredientImgData/cheongyang_pepper.jpg",
  },
  {
    id: 44,
    name: "홍고추",
    imageUrl: "/images/ingredientImgData/red_pepper.jpg",
  },
  {
    id: 45,
    name: "생강",
    imageUrl: "/images/ingredientImgData/ginger.jpg",
  },
  {
    id: 46,
    name: "당근",
    imageUrl: "/images/ingredientImgData/carrot.jpg",
  },

  {
    id: 101,
    name: "고추장",
    imageUrl: "/images/ingredientImgData/gochujang.jpg",
  },
  {
    id: 102,
    name: "된장",
    imageUrl: "/images/ingredientImgData/doenjang.jpg",
  },
  {
    id: 103,
    name: "간장",
    imageUrl: "/images/ingredientImgData/soysauce.jpg",
  },
  {
    id: 104,
    name: "초고추장",
    imageUrl: "/images/ingredientImgData/chogochujang.jpg",
  },
  {
    id: 105,
    name: "설탕",
    imageUrl: "/images/ingredientImgData/sugar.jpg",
  },
  {
    id: 106,
    name: "소금",
    imageUrl: "/images/ingredientImgData/salt.jpg",
  },
  {
    id: 107,
    name: "식용유",
    imageUrl: "/images/ingredientImgData/oil.jpg",
  },
  {
    id: 108,
    name: "미원",
    imageUrl: "/images/ingredientImgData/msg.jpg",
  },
  {
    id: 109,
    name: "식초",
    imageUrl: "/images/ingredientImgData/vinegar.jpg",
  },
  {
    id: 110,
    name: "맛술",
    imageUrl: "/images/ingredientImgData/ricewine.jpg",
  },
  {
    id: 111,
    name: "토마토케찹",
    imageUrl: "/images/ingredientImgData/ketchup.jpg",
  },
  {
    id: 112,
    name: "마요네즈",
    imageUrl: "/images/ingredientImgData/mayonnaise.jpg",
  },
  {
    id: 113,
    name: "참기름",
    imageUrl: "/images/ingredientImgData/sesame_oil.jpg",
  },
  {
    id: 114,
    name: "고춧가루",
    imageUrl: "/images/ingredientImgData/chilli_powder.jpg",
  },
  {
    id: 115,
    name: "멸치액젓",
    imageUrl: "/images/ingredientImgData/anchovy_sauce.jpg",
  },
  {
    id: 116,
    name: "후추",
    imageUrl: "/images/ingredientImgData/pepper.jpg",
  },
  {
    id: 117,
    name: "물엿",
    imageUrl: "/images/ingredientImgData/corn_syrup.jpg",
  },
  {
    id: 118,
    name: "새우젓",
    imageUrl: "/images/ingredientImgData/salted_shrimp.jpg",
  },
  {
    id: 119,
    name: "들깨가루",
    imageUrl: "/images/ingredientImgData/perilla_powder.jpg",
  },
  {
    id: 120,
    name: "카레가루",
    imageUrl: "/images/ingredientImgData/curry_powder.jpg",
  },

  {
    id: 161,
    name: "계란",
    imageUrl: "/images/ingredientImgData/egg.jpg",
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
