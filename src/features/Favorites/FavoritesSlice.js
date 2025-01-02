import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: Array.isArray(JSON.parse(localStorage.getItem("favorites")))
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const pokemon = action.payload;
      const isFavorite = state.favorites.some(
        (fav) => fav.name === pokemon.name
      );

      if (isFavorite) {
        // Remove
        state.favorites = state.favorites.filter(
          (fav) => fav.name !== pokemon.name
        );
      } else {
        // Add
        state.favorites = [...state.favorites, pokemon];
      }

      // Save the updated
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default FavoritesSlice.reducer;
export const { toggleFavorite } = FavoritesSlice.actions;
