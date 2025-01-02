import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggleFavorite } from "../../features/Favorites/FavoritesSlice";

const FavoritesAndDetails = ({ pokemon }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  // For favorite button innter text
  const fTitle = favorites.some((fav) => fav.name === pokemon.name)
    ? "Unfavorite"
    : "Favorite";

  // For changing favorite button style
  const isFavorite = favorites.some((fav) => fav.name === pokemon.name);
  return (
    <div>
      <h1 className="bg-slate-200 hover:bg-indigo-600 hover:text-white transition-colors mb-2 rounded text-xl cursor-pointer">
        <Link className="block" to={`/pokemon/${pokemon.name}`}>
          Details
        </Link>
      </h1>
      <h1
        className={`rounded text-white cursor-pointer text-xl ${
          isFavorite
            ? "bg-pink-600 hover:bg-pink-700"
            : "bg-indigo-500 hover:bg-indigo-600"
        } `}
        onClick={() => dispatch(toggleFavorite(pokemon))}
      >
        {fTitle}
      </h1>
    </div>
  );
};

export default FavoritesAndDetails;
