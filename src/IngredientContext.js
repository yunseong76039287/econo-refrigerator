import React, { createContext, useContext, useState, useEffect } from "react";

export const IngredientContext = createContext();

export const IngredientProvider = ({ children }) => {
  const [refrigeratorIngredientsId, setRefrigeratorIngredientsId] = useState(
    []
  );

  useEffect(() => {
    loadRefrigeratorIngredientsId();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "refrigerator",
      JSON.stringify(refrigeratorIngredientsId)
    );
  }, [refrigeratorIngredientsId]);

  const loadRefrigeratorIngredientsId = () => {
    const loadedIngredientsId = window.localStorage.getItem("refrigerator");
    if (loadedIngredientsId === null || loadedIngredientsId === undefined) {
      return;
    }

    setRefrigeratorIngredientsId(JSON.parse(loadedIngredientsId));
  };

  const selectIngredient = (id) => {
    setRefrigeratorIngredientsId([...refrigeratorIngredientsId, id]);
  };

  const unselectIngredient = (id) => {
    const newRefrigeratorIngredients = refrigeratorIngredientsId.filter(
      (element) => element !== id
    );

    setRefrigeratorIngredientsId(newRefrigeratorIngredients);
  };

  const isSelectedIngredient = (id) => {
    const selectedIngredient = refrigeratorIngredientsId.find(
      (element) => element === id
    );

    return selectedIngredient !== undefined ? true : false;
  };

  return (
    <IngredientContext.Provider
      value={{
        refrigeratorIngredientsId,
        loadRefrigeratorIngredientsId,
        selectIngredient,
        unselectIngredient,
        isSelectedIngredient,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

export const useIngredientsId = () => {
  const { refrigeratorIngredientsId } = useContext(IngredientContext);
  return refrigeratorIngredientsId;
};

export const useLoadIngredientsId = () => {
  const { loadRefrigeratorIngredientsId } = useContext(IngredientContext);
  return loadRefrigeratorIngredientsId;
};

export const useSelectIngredient = () => {
  const { selectIngredient } = useContext(IngredientContext);
  return selectIngredient;
};

export const useUnselectIngredient = () => {
  const { unselectIngredient } = useContext(IngredientContext);
  return unselectIngredient;
};

export const useIsSelectedIngredient = () => {
  const { isSelectedIngredient } = useContext(IngredientContext);
  return isSelectedIngredient;
};
