import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
  token: string;
  userId: string;
  role: string;
  avatar: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: "",
  userId: "",
  role: "",
  avatar: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.role = action.payload.roleName;
      state.avatar = action.payload.avatar;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.userId = "";
      state.role = "";
      state.avatar = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
