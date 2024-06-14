import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  nickname: localStorage.getItem("nickname") || "",
  password: localStorage.getItem("password") || "",
  id: localStorage.getItem("id") || "",
  avatar: null,
  userId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
      localStorage.setItem("nickname", action.payload);
    },

    removeNickname: (state) => {
      state.nickname = "";
      localStorage.removeItem("nickname");
    },

    setPassword: (state, action) => {
      state.password = action.payload;
      localStorage.setItem("password", action.payload);
    },
    removePassword: (state) => {
      state.password = "";
      localStorage.removeItem("password");
    },
    setId: (state, action) => {
      state.id = action.payload;
      localStorage.setItem("id", action.payload);
    },
    removeId: (state) => {
      state.id = "";
      localStorage.removeItem("id");
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
      localStorage.setItem("avatar", action.payload);
    },
  },
});

export const {
  login,
  logout,
  setNickname,
  removeNickname,
  setPassword,
  removePassword,
  setId,
  removeId,
  setAvatar,
} = authSlice.actions;
export default authSlice.reducer;
