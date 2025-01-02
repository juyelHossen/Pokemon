import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import favorites from "../../assets/favorite.png";
import searchImg from "../../assets/search.png";
import { setSearchBar } from "../../features/search/searchSlice";
import Search from "./search";

const HeaderNav = () => {
  const fav = useSelector((state) => state.favorites.favorites);
  const isSearchBar = useSelector((state) => state.search.searchBar);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen">
      <div className=" text-black dark:text-white bg-slate-100 dark:bg-slate-800 sticky top-0 left-0">
        <nav className="flex items-center justify-between container mx-auto px-5 sm:px-0 relative">
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
