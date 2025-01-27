import React from "react";
import { useSelector } from "react-redux";
import FavoritesAndDetails from "../Button/DetailsAndFavorites";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return favorites.length ? (
    <ul
      className="container mx-auto sm:mx-4 md:mx-8 lg:mx-16 list-none grid grid-cols-1
        lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-4 m-auto w-full dark:bg-gray-900 pt-4"
    >
      {favorites?.map((f) => (
        <li
          className="rounded hover:shadow-lg dark:hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-slate-700 text-center w-full p-4 bg-white dark:bg-gray-900 dark:text-white"
          key={f.name}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              f.url?.split("/")[6]
            }.png`}
            alt={f.name}
            className="w-full mx-auto"
          />
          <h3 className="text-xl mb-2">{f.name}</h3>
          <FavoritesAndDetails pokemon={f} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-500">Empty</h1>
    </div>
  );
};

export default Favorites;
