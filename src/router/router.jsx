import { createBrowserRouter } from "react-router";
import Details from "../component/Details/Details";
import Favorites from "../component/favorites/Favorites";
import Home from "../component/Home";
import HeaderNav from "../component/Navbar/HeaderNavbar";
import SecondHeader from "../component/Navbar/SecondHeader";
import NotFound from "../component/NotFound/NotFound";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNav />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/pokemon/:name",
    element: <SecondHeader />,
    children: [
      {
        path: "/pokemon/:name",
        element: <Details />,
      },
    ],
  },
]);
export default rootRouter;
