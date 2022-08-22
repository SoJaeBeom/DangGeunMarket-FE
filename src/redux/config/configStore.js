import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { productAddSlice } from '../modules/product';

export const store = configureStore(
  {
    reducer: {
      productAdd: productAddSlice.reducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
