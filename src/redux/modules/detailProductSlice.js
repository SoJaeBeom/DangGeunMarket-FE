import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detailProduct: {},
  isLoading: false,
  isFinish: false,
  error: null,
};

export const __getDetailProduct = createAsyncThunk(
  "detailProduct/__getDetailProduct",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://54.180.2.97/api/product/id/${payload}`
      );
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      throw error;
    }
  }
);

export const detailProductSlice = createSlice({
  name: "detailProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.isFinish = false;
    },
    [__getDetailProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.detailProduct = action.payload;
    },
    [__getDetailProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
  },
});

export default detailProductSlice.reducer;
