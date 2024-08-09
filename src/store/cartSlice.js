import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add(state, action) {
      state.push(action?.payload);
    },
    deleteItem(state, action) {
      return state.filter((p) => p?.id !== action?.payload);
    },
  },
});

export const { add, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
