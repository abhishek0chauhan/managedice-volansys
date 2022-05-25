import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// let price_array = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    clear: (state, action) => {
      return (state = []);
    },
    // price: (state, action) => {
    //   state.forEach((item) => price_array.push(item.servicee[0].service_price));
    // },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
