import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { productAddSlice } from '../modules/product';
import detailProduct from "../modules/detailProductSlice";

export const store = configureStore(
  {
    reducer: {
      productAdd: productAddSlice.reducer,
      detailProduct
    },
  },
  applyMiddleware(thunk)
);

export default store;
