import { createSlice } from "@reduxjs/toolkit";
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
    logoutCart(state) {
      return 0;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { increase, decrease, update, increaseMany, logoutCart } = actions;
export default cartSlice.reducer;
