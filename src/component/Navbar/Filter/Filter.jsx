import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../features/FilterSlice/FilterSlice";

const FilterPokemon = () => {
  const PokeType = useSelector((state) => state.PokemonType.pokemonType);
  const dispatch = useDispatch();
  return (
    <div>
      <select
        className="py-1 px-3 text-md rounded outline-none pe-10 bg-indigo-500 text-white"
        value={PokeType}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="all">All</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>
    </div>
  );
};

export default FilterPokemon;
