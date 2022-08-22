import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getProduct = createAsyncThunk(
  'getProduct',
  async (productId, thunkAPI) => {
    try {
      console.log(productId);
      const data = await axios.get(
        `http://3.34.98.245/api/product/${productId}`
        // {
        //   headers: { authorization:  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxMTcxMTMxfQ.3cpJM4Hvb8sabobbCFwUCRJ_L6pI-xFO8ikxD737chc" },
        // }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postProduct = createAsyncThunk(
  'productAdd/postProductAdd',
  async (product, thunkAPI) => {
    try {
      console.log(product);
      const data = await axios.post('http://3.34.98.245/api/product', product, {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxMTczNDY5fQ.whs1Zh8B9mgOOiO1gS9N95nu9IxZt69KHbUXe-41ebg',
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productAddSlice = createSlice({
  name: 'productAdd',
  initialState: {
    product: [],
  },
  reducers: {},
  extraReducers: {},
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [__getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [__getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
