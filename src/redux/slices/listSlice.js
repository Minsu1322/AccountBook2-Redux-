import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setList, addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
