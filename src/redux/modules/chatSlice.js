import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken, getNickname } from "../../storage/Cookie";

const initialState = {
  list: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

const configHttp = {
  headers: {
    Authorization: getCookieToken(),
  },
};
const nickname = getNickname();
console.log(nickname);
export const __getList = createAsyncThunk(
  "chat/__getList",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.get(
        `http://3.35.22.118/chat/chatRoom/${nickname}`,
        configHttp
      );
      console.log("list is ::: ", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: {},
  reducers: {
    getChatRoomId: (previousState, action) => {
      previousState = action.payload.roomId;
      return previousState;
    },
  },
  extraReducers: {
    [__getList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    },
  },
});

export const { getChatRoomId } = chatSlice.actions;

export default chatSlice.reducer;
