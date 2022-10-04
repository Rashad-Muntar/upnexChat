import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = { username: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetUsername(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.user.username) {
        return state;
      }
      return {
        ...state.username,
        ...action.payload.user,
      };
    },
  },
});

export const { SetUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;
