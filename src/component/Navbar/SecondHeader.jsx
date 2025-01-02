import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import favorites from "../../assets/favorite.png";
import DarkButton from "./Filter/darkToggle/DarkButton";

const SecondHeader = () => {
  const fav = useSelector((state) => state.favorites.favorites);

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className=" text-black dark:text-white bg-slate-100 dark:bg-slate-800 sticky top-0 left-0">
        <nav className="flex items-center justify-between container mx-auto px-5 sm:px-0 relative">
          <Link to={"/"}>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-500  py-3 md:py-4 relative group">
              Pokemon
              <span className="hidden group-hover:inline px-1 bg-slate-200 absolute top-10 -right-2 text-sm text-gray-600 rounded">
                Home
              </span>
            </h1>
          </Link>

          <ul className="list-none flex items-center gap-6 text-xl p-0">
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
      </div>
      <div className="dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default SecondHeader;
