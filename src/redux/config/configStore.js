import { configureStore } from "@reduxjs/toolkit";
import detailProduct from "../modules/detailProductSlice";
const store = configureStore({
  reducer: { detailProduct },
});

export default store;
