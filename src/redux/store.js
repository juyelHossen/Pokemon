import { configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "../features/Favorites/FavoritesSlice";
import FilterReducer from "../features/FilterSlice/FilterSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: FavoritesReducer,
    PokemonType: FilterReducer,
  },
});
export default store;
