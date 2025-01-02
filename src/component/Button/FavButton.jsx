import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/Favorites/FavoritesSlice";

const FavButton = ({ pokemon }) => {
  const favorites = useSelector((state) => state.favorites.favorites);

  const dispatch = useDispatch();
  // For favorite button innter text
  const fTitle = favorites.some((fav) => fav.name === pokemon.name)
    ? "Unfavorite"
    : "Favorite";

  // For changing favorite button style
  const isFavorite = favorites.some((fav) => fav.name === pokemon.name);
  return (
    <>
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
    </>
  );
};

export default FavButton;
