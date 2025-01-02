import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import closeImg from "../../assets/close.png";
import favorites from "../../assets/favorite.png";
import menuImg from "../../assets/menu.png";
import searchImg from "../../assets/search.png";
import { setSearchBar } from "../../features/search/searchSlice";
import DarkButton from "./Filter/darkToggle/DarkButton";
import FilterPokemon from "./Filter/Filter";
import Search from "./search";

const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const fav = useSelector((state) => state.favorites.favorites);
  const isSearchBar = useSelector((state) => state.search.searchBar);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className=" text-black dark:text-white bg-slate-100 dark:bg-gray-800 sticky top-0 left-0">
        <nav className="flex items-center justify-between container mx-auto px-5 sm:px-0 relative">
          <div className="flex items-center gap-7">
            <div className="w-8 cursor-pointer ">
              <img
                src={menu ? closeImg : menuImg}
                onClick={() => setMenu(!menu)}
              />
            </div>
            <div
              className={
                menu ? "block absolute top-full p-2 bg-[#5375ffcc] " : "hidden"
              }
            >
              <h3 className="mb-1 text-white">Type</h3>
              <FilterPokemon />
            </div>
            <Link to={"/"}>
              <h1
                className="text-2xl md:text-3xl font-bold text-indigo-500  py-3 md:py-4 relative group"
                onClick={() => dispatch(setSearchBar(false))}
              >
                Pokemon
                <span className="hidden group-hover:inline px-1 bg-slate-200 absolute top-10 -right-2 text-sm text-gray-600 rounded">
                  Home
                </span>
              </h1>
            </Link>
            <div className="hidden sm:block">
              <FilterPokemon />
            </div>
          </div>

          <ul className="list-none flex items-center gap-6 text-xl p-0">
            <div className="relative">
              <div className="hidden sm:block">
                <Search />
              </div>

              <img
                src={searchImg}
                alt="search"
                className="w-7 md:w-10 sm:hidden"
                onClick={() => dispatch(setSearchBar(!isSearchBar))}
              />
            </div>
            <li className="relative">
              <Link to={"/favorites"}>
                <span className="absolute text-sm bg-indigo-500 rounded-full text-white -top-3 -right-3 ketvj">
                  {fav.length}
                </span>
                <img src={favorites} className="w-7 md:w-10 cursor-pointer" />
              </Link>
            </li>
            <DarkButton />
          </ul>
        </nav>
        <div className="sm:hidden">
          <Search />
        </div>
      </div>
      <div className="mb-10">
        <Outlet />
      </div>
      <div className="fixed left-0 bottom-0 bg-slate-300 w-full ">
        <div className="container mx-auto text-sm py-1 flex gap-4">
          <h1>
            Developed by:
            <a
              href="https://www.facebook.com/j.h.imran1"
              target="_blank"
              className="ps-2 text-blue-500 hover:underline font-semibold"
            >
              Juyel Hossen Imran
            </a>
          </h1>
          <h1>IC Student Id: MSWDB3_287</h1>
          <div />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
