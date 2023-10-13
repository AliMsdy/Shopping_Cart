import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import productsReducer from "./productsSlice/productsSlice";

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

const store = configureStore({
  reducer: productsReducer,
});

export default store;
