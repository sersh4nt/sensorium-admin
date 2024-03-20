import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}
const initialState: AuthState = {
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token, remember = false } = action.payload;
      state.token = token;
      if (remember) {
        localStorage.setItem("token", token);
      }
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
