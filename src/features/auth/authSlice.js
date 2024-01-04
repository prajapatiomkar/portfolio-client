import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage?.getItem("userInfo"))
    : null,
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload.data;
      localStorage.setItem("userInfo", JSON.stringify(payload.data));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state) => state.auth?.userInfo;
