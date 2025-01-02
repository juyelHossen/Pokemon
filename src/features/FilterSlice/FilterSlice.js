import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonType: "all",
};
const FiterSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.pokemonType = action.payload;
    },
  },
});

export default FiterSlice.reducer;
export const { setFilter } = FiterSlice.actions;
