import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
  name: "favoArt",
  initialState: {
    favoArt: [],
  },
  reducers: {
    addArt(state, action) {
      let art = [{ ...action.payload }, ...state.art];
      state.art = art;
    },
  },
});

export const { addArt } = artSlice.actions;
export const favoArt = (state) => state.favoArt;
export default artSlice.reducer;
