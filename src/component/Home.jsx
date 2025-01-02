import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavoritesAndDetails from "./Button/DetailsAndFavorites";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const search = useSelector((state) => state.search.search);
  const PokeType = useSelector((state) => state.PokemonType.pokemonType);

  // fetch Pokemon from api
  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await response.json();
    setPoke(data.results);
    setLoading(false);
  };

  // fetch pokemon by type
  const FilterByType = async () => {
    if (PokeType === "all") {
      await fetchPokemon();
    } else {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${PokeType}?limit=50`
      );
      const data = await response.json();

      const filteredPokemon = data.pokemon.map((p) => p.pokemon);
      setPoke(filteredPokemon);
      setLoading(false);
    }
  };

  useEffect(() => {
    FilterByType();
  }, [PokeType]);

  // Sort pokemon by first letter name A-Z
  const sortPoke = poke.slice().sort((a, b) => a.name.localeCompare(b.name));

  // Filter Pokemon for search
  const filteredPoke = sortPoke?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return loading ? (
    <div className="flex justify-center items-center text-xl h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    </div>
  ) : (
    <>
      {search.length ? (
        <div className="text-xl container mx-auto py-2">
          <span>Result for '{search}'</span>
        </div>
      ) : (
        <div className="none"></div>
      )}

      {filteredPoke.length ? (
        <div className="overflow-hidden mt-4">
          <ul
            className="container mx-auto list-none grid grid-cols-1
       sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-4 w-full "
          >
            {filteredPoke?.map((pokemon) => (
              <li
                className="rounded shadow-lg shadow-slate-300 text-center w-full p-4 bg-white"
                key={pokemon.name}
              >
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemon.url.split("/")[6]
                    }.png`}
                    alt={pokemon.name}
                    className="w-full mx-auto border-2 border-indigo-500"
                  />
                </div>
                <h3 className="text-xl mb-2 capitalize">{pokemon.name}</h3>

                <FavoritesAndDetails pokemon={pokemon} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-gray-400 text-xl h-screen flex justify-center items-center">
          <span>Not Match pokemon for '{search}'</span>
        </div>
      )}
    </>
  );
};

export default Home;
