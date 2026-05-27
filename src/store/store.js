import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import productReducer from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
