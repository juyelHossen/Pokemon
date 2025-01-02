import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FavButton from "../Button/FavButton";

const Details = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDetails(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [name]);

  return loading ? (
    <div className="flex justify-center items-center text-xl h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    </div>
  ) : (
    <div className="container mx-auto mt-5">
      <div className="md:mx-0 md:flex w-full md:justify-between md:items-center">
        <div className="text-center md:w-2/5 mb-5 px-12">
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            className="block mx-auto w-40 h-40"
          />
          <h1 className="text-2xl text-center md:text-3xl  capitalize mb-3">
            {pokemonDetails.name}
          </h1>
          <FavButton pokemon={pokemonDetails} />
        </div>

        <div className=" border-x-2">
          <h1 className="bg-slate-200 text-xl font-semibold text-center">
            Details
          </h1>
          <div className="mb-1 mt-1 flex border-b-2 px-3 pt-3 pb-3">
            <h1 className="text-lg font-bold">Type : </h1>
            <ul className="list-none ms-4 flex gap-3 items-center">
              {pokemonDetails.types.map((type) => (
                <li
                  key={type.type.name}
                  className="text-md capitalize p-1 bg-slate-200 rounded"
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-1 flex border-b-2 pt-3 pb-3 px-3">
            <h1 className="text-lg font-bold">Abilities :</h1>
            <ul className="list-none ms-4 flex gap-4 ">
              {pokemonDetails.abilities.map((ability) => (
                <li
                  key={ability.ability.name}
                  className="capitalize text-md p-1 bg-slate-200 rounded"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-1 flex flex-wrap border-b-2 pb-3 px-3">
            <h2 className="text-lg font-bold inline-block w-28">
              Base Stats :
            </h2>
            <ul className="list-none ms-1 flex gap-2 flex-wrap">
              {pokemonDetails.stats.map((stat) => (
                <li
                  key={stat.stat.name}
                  className="text-md capitalize p-1 bg-slate-200 rounded"
                >
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
