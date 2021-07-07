const ingredientDataArray = [
  {
    id: 1,
    name: "양파",
    imageUrl: "/images/onion.jpg",
  },
  {
    id: 2,
    name: "대파",
    imageUrl: "/images/greenonion.jpg",
  },
  {
    id: 3,
    name: "간장",
    imageUrl: "/images/soysauce.jpg",
  },
  {
    id: 4,
    name: "된장",
    imageUrl: "/images/Doenjang.jpg",
  },
  {
    id: 5,
    name: "고추장",
    imageUrl: "/images/gochujang.jpg",
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
