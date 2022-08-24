import { configureStore } from '@reduxjs/toolkit';
import detailProduct from '../modules/detailProductSlice';

export const store = configureStore({
  reducer: {
    detailProduct,
  },
});

export default store;
