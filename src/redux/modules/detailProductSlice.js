import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookieToken } from '../../storage/Cookie';

const initialState = {
  detailProduct: {},
  isLoading: false,
  isFinish: false,
  error: null,
};

const cookie = getCookieToken();

export const __getDetailProduct = createAsyncThunk(
  'detailProduct/__getDetailProduct',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://54.180.2.97/api/product/id/${payload}`,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      throw error;
    }
  }
);

export const __postDetailProduct = createAsyncThunk(
  'detailProduct/__postDetailProduct',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://54.180.2.97/api/product', payload, {
        headers: {
          Authorization: cookie,
        },
      });
      console.log(data);
      window.alert('상품이 등록 되었습니다.');
      document.location.href = '/posts';
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteDetailProduct = createAsyncThunk(
  'detailProduct/__deleteDetailProduct',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.delete(
        `http://54.180.2.97/api/product/${payload}`,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      console.log(data);
      window.alert('삭제되었습니다.');
      return thunkAPI.fulfillWithValue(data.payload);
    } catch (error) {
      window.alert('삭제에러!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editDetailProduct = createAsyncThunk(
  'detailProduct/__editDetailProduct',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.put(
        `http://54.180.2.97/api/product/${payload.id}`,
        {
          name: payload.name,
          price: payload.price,
          content: payload.content,
          imgProductList: payload.imgProductList,
        },
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      console.log(data);
      window.alert('수정되었습니다.');
      return thunkAPI.fulfillWithValue(data.payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailProductSlice = createSlice({
  name: 'detailProduct',
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
