import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { useSelector } from "react-redux";

var initalCounter = 0;
const setup = () => {
  initalCounter = useSelector((state: any) => state.cart);
};
const cartSlice = createSlice({
  name: "counter",
  initialState: initalCounter,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    update(state, action) {
      return Number(action.payload);
    },
    increaseMany(state, action) {
      return state + Number(action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { increase, decrease, update, increaseMany } = actions;
export default cartSlice.reducer;
