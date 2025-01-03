import { Link } from "react-router";
import SecondHeader from "../Navbar/SecondHeader";

const NotFound = () => {
  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="fixed w-screen">
        <SecondHeader />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-gray-400 text-4xl sm:text-7xl md:text-9xl font-bold text-center">
            4O4
          </h1>
          <Link to={"/"}>
            <h1 className="cursor-pointer text-xl rounded bg-indigo-600 text-white px-4 py-2 mt-5">
              Go Home
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
