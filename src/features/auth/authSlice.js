import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state) => state.auth?.userInfo;
