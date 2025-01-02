import { useDispatch, useSelector } from "react-redux";
import closeImg from "../../assets/close.png";
import SearhImg from "../../assets/search.png";
import { setSearch, setSearchBar } from "../../features/search/searchSlice";
const Search = () => {
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <div className="relative w-full">
        {search.searchBar ? (
          <div className=" sm:absolute sm:right-0 top-1/2 sm:transform sm:-translate-y-1/2">
            <input
              className="w-full sm:w-96 p-1 rounded-3xl ps-3 pe-9   outline-none border-blue-300 focus:border text-xl"
              type="text"
              placeholder="Search"
              value={search.search}
              onChange={handleOnChange}
            />
            <img
              src={closeImg}
              onClick={() => {
                dispatch(setSearchBar(!search.searchBar));
              }}
              className="w-7 absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer "
            />
          </div>
        ) : (
          <img
            src={SearhImg}
            className="hidden sm:block w-7 md:w-10 cursor-pointer "
            onClick={() => {
              dispatch(setSearchBar(!search.searchBar));
            }}
          />
        )}
      </div>
    </>
  );
};

export default Search;
