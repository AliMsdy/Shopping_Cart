import React, { createContext, useEffect, useReducer } from "react";

//API
import { getData } from "../services/api";

export const appContext = createContext();

function reducer(state, action) {
  let copiedArray, selectedProduct;
  switch (action.type) {
    case "Increment":
      copiedArray = [...state];
      selectedProduct = copiedArray.find(
        (item) => item.id === action.payload.id
      );
      selectedProduct.amount++;
      return copiedArray;
    case "Decrement":
      copiedArray = [...state];
      selectedProduct = copiedArray.find(
        (item) => item.id === action.payload.id
      );
      selectedProduct.amount > 0 && selectedProduct.amount--;
      return copiedArray;
    case "setState":
      return [...action.payload];
    case "Clear":
      copiedArray = [...state];
      let modifiedArray = copiedArray.map((product) => ({
        ...product,
        amount: 0,
      }));
      return modifiedArray;
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  let [products, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const fetchData = async () => {
      let originalArray = await getData();
      let modifiedArray = originalArray.map((item) => {
        return { ...item, amount: 0 };
      });
      dispatch({ type: "setState", payload: modifiedArray });
    };

    fetchData();
  }, []);
  return (
    <appContext.Provider value={{ products, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider;
