import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {},
  reducers: {
    getChatRoomId: (previousState, action) => {
      previousState = action.payload.roomId;
      return previousState;
    },
  },
  extraReducers: {},
});

export const { getChatRoomId } = chatSlice.actions;

export default chatSlice.reducer;
