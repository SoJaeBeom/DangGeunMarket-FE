import { configureStore } from "@reduxjs/toolkit";
import detailProduct from "../modules/detailProductSlice";
import chatReducer from "../modules/chatSlice";

export const store = configureStore({
  reducer: {
    detailProduct,
    chatSlice: chatReducer,
  },
});

export default store;
