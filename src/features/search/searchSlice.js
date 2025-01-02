import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  searchBar: false,
};
const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchBar: (state, action) => {
      state.searchBar = action.payload;
      state.search = "";
    },
  },
});

export default SearchSlice.reducer;
export const { setSearch, setSearchBar } = SearchSlice.actions;
