import { createSlice } from "@reduxjs/toolkit";

export const artSlice = createSlice({
  name: "favoArt",
  initialState: {
    favoArt: [],
  },
  reducers: {
    addArt(state, action) {
      state.favoArt = [...state.favoArt, action.payload];
    },
    removeArt(state, action) {
      const newarray = state.favoArt.filter((art) => art.id === action.payload);
      state.favoArt = [...newarray];
    },
  },
});

export const { addArt, removeArt } = artSlice.actions;
export const favoArt = (state) => state.favoArt;
export default artSlice.reducer;
