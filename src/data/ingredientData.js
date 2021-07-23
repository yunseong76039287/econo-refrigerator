// only for front

const ingredientDataArray = [
  {
    id: 1,
    name: "밥",
    imageUrl: "/images/ingredientImgData/rice.jpg",
    type: "탄수화물",
  },
  {
    id: 2,
    name: "감자",
    imageUrl: "/images/ingredientImgData/potato.jpg",
    type: "탄수화물",
  },
  {
    id: 3,
    name: "고구마",
    imageUrl: "/images/ingredientImgData/sweet_potato.jpg",
    type: "탄수화물",
  },
  {
    id: 4,
    name: "라면사리",
    imageUrl: "/images/ingredientImgData/ramen_noodles.jpg",
    type: "탄수화물",
  },
  {
    id: 5,
    name: "당면",
    imageUrl: "/images/ingredientImgData/glass_noodles.jpg",
    type: "탄수화물",
  },
  {
    id: 6,
    name: "가래떡",
    imageUrl: "/images/ingredientImgData/rice_cake.jpg",
    type: "탄수화물",
  },
  {
    id: 7,
    name: "빵가루",
    imageUrl: "/images/ingredientImgData/bread_powder.jpg",
    type: "탄수화물",
  },
  {
    id: 8,
    name: "전분",
    imageUrl: "/images/ingredientImgData/starch.jpg",
    type: "탄수화물",
  },
  {
    id: 9,
    name: "옥수수",
    imageUrl: "/images/ingredientImgData/corn.jpg",
    type: "탄수화물",
  },
  {
    id: 10,
    name: "밀가루(강력)",
    imageUrl: "/images/ingredientImgData/bread_flour.jpg",
    type: "탄수화물",
  },
  {
    id: 11,
    name: "밀가루(중력)",
    imageUrl: "/images/ingredientImgData/plain_flour.jpg",
    type: "탄수화물",
  },
  {
    id: 12,
    name: "밀가루(박력)",
    imageUrl: "/images/ingredientImgData/soft_flour.jpg",
    type: "탄수화물",
  },
  {
    id: 31,
    name: "칼국수면",
    imageUrl: "/images/ingredientImgData/kalguksu.jpg",
    type: "탄수화물",
  },
  {
    id: 32,
    name: "양파",
    imageUrl: "/images/ingredientImgData/onion.jpg",
    type: "농산물",
  },
  {
    id: 33,
    name: "마늘",
    imageUrl: "/images/ingredientImgData/garlic.jpg",
    type: "농산물",
  },
  {
    id: 34,
    name: "다진마늘",
    imageUrl: "/images/ingredientImgData/chopped_garlic.jpg",
    type: "농산물",
  },
  {
    id: 35,
    name: "오이",
    imageUrl: "/images/ingredientImgData/cucumbers.jpg",
    type: "농산물",
  },
  {
    id: 36,
    name: "청경채",
    imageUrl: "/images/ingredientImgData/bokchoy.png",
    type: "농산물",
  },
  {
    id: 37,
    name: "부추",
    imageUrl: "/images/ingredientImgData/chives.jpg",
    type: "농산물",
  },
  {
    id: 38,
    name: "배추",
    imageUrl: "/images/ingredientImgData/kimchi_cabbage.jpg",
    type: "농산물",
  },
  {
    id: 39,
    name: "양배추",
    imageUrl: "/images/ingredientImgData/cabbage.jpg",
    type: "농산물",
  },
  {
    id: 40,
    name: "적상추",
    imageUrl: "/images/ingredientImgData/red_lettuce.jpg",
    type: "농산물",
  },
  {
    id: 41,
    name: "깻잎",
    imageUrl: "/images/ingredientImgData/perilla_leaf.jpg",
    type: "농산물",
  },
  {
    id: 42,
    name: "무",
    imageUrl: "/images/ingredientImgData/radish.jpg",
    type: "농산물",
  },
  {
    id: 43,
    name: "청양고추",
    imageUrl: "/images/ingredientImgData/cheongyang_pepper.jpg",
    type: "농산물",
  },
  {
    id: 44,
    name: "홍고추",
    imageUrl: "/images/ingredientImgData/red_pepper.jpg",
    type: "농산물",
  },
  {
    id: 45,
    name: "생강",
    imageUrl: "/images/ingredientImgData/ginger.jpg",
    type: "농산물",
  },
  {
    id: 46,
    name: "당근",
    imageUrl: "/images/ingredientImgData/carrot.jpg",
    type: "농산물",
  },

  {
    id: 101,
    name: "고추장",
    imageUrl: "/images/ingredientImgData/gochujang.jpg",
    type: "소스&장류",
  },
  {
    id: 102,
    name: "된장",
    imageUrl: "/images/ingredientImgData/doenjang.jpg",
    type: "소스&장류",
  },
  {
    id: 103,
    name: "간장",
    imageUrl: "/images/ingredientImgData/soysauce.jpg",
    type: "소스&장류",
  },
  {
    id: 104,
    name: "초고추장",
    imageUrl: "/images/ingredientImgData/chogochujang.jpg",
    type: "소스&장류",
  },
  {
    id: 105,
    name: "설탕",
    imageUrl: "/images/ingredientImgData/sugar.jpg",
    type: "소스&장류",
  },
  {
    id: 106,
    name: "소금",
    imageUrl: "/images/ingredientImgData/salt.jpg",
    type: "소스&장류",
  },
  {
    id: 107,
    name: "식용유",
    imageUrl: "/images/ingredientImgData/oil.jpg",
    type: "소스&장류",
  },
  {
    id: 108,
    name: "미원",
    imageUrl: "/images/ingredientImgData/msg.jpg",
    type: "소스&장류",
  },
  {
    id: 109,
    name: "식초",
    imageUrl: "/images/ingredientImgData/vinegar.jpg",
    type: "소스&장류",
  },
  {
    id: 110,
    name: "맛술",
    imageUrl: "/images/ingredientImgData/ricewine.jpg",
    type: "소스&장류",
  },
  {
    id: 111,
    name: "토마토케찹",
    imageUrl: "/images/ingredientImgData/ketchup.jpg",
    type: "소스&장류",
  },
  {
    id: 112,
    name: "마요네즈",
    imageUrl: "/images/ingredientImgData/mayonnaise.jpg",
    type: "소스&장류",
  },
  {
    id: 113,
    name: "참기름",
    imageUrl: "/images/ingredientImgData/sesame_oil.jpg",
    type: "소스&장류",
  },
  {
    id: 114,
    name: "고춧가루",
    imageUrl: "/images/ingredientImgData/chilli_powder.jpg",
    type: "소스&장류",
  },
  {
    id: 115,
    name: "멸치액젓",
    imageUrl: "/images/ingredientImgData/anchovy_sauce.jpg",
    type: "소스&장류",
  },
  {
    id: 116,
    name: "후추",
    imageUrl: "/images/ingredientImgData/pepper.jpg",
    type: "소스&장류",
  },
  {
    id: 117,
    name: "물엿",
    imageUrl: "/images/ingredientImgData/corn_syrup.jpg",
    type: "소스&장류",
  },
  {
    id: 118,
    name: "새우젓",
    imageUrl: "/images/ingredientImgData/salted_shrimp.jpg",
    type: "소스&장류",
  },
  {
    id: 119,
    name: "들깨가루",
    imageUrl: "/images/ingredientImgData/perilla_powder.jpg",
    type: "소스&장류",
  },
  {
    id: 120,
    name: "카레가루",
    imageUrl: "/images/ingredientImgData/curry_powder.jpg",
    type: "소스&장류",
  },

  {
    id: 161,
    name: "계란",
    imageUrl: "/images/ingredientImgData/egg.jpg",
    type: "유제품",
  },
  {
    id: 162,
    name: "우유",
    imageUrl: "/images/ingredientImgData/milk.jpg",
    type: "유제품",
  },
  {
    id: 163,
    name: "버터",
    imageUrl: "/images/ingredientImgData/butter.jpg",
    type: "유제품",
  },
  {
    id: 164,
    name: "모짜렐라치즈",
    imageUrl: "/images/ingredientImgData/mozzarella_cheese.jpg",
    type: "유제품",
  },
  {
    id: 165,
    name: "체다슬라이스치즈",
    imageUrl: "/images/ingredientImgData/cheddar_slice_cheese.jpg",
    type: "유제품",
  },
  {
    id: 166,
    name: "휘핑크림",
    imageUrl: "/images/ingredientImgData/whipping_cream.jpg",
    type: "유제품",
  },
  {
    id: 201,
    name: "돼지목살",
    imageUrl: "/images/ingredientImgData/pork_neck.jpg",
    type: "육류",
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
