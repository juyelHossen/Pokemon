import { configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "../features/Favorites/FavoritesSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: FavoritesReducer,
  },
});
export default store;
