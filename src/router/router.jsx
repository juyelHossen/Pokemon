import { createBrowserRouter } from "react-router";
import Details from "../component/Details/Details";
import Favorites from "../component/favorites/Favorites";
import Home from "../component/Home";
import HeaderNav from "../component/Navbar/HeaderNavbar";
import NotFound from "../component/NotFound/NotFound";
import RootTwo from "../component/rootLayout/RootTwo";

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
    ],
  },
  {
    path: "/favorites",
    element: <RootTwo />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/pokemon/:name",
    element: <RootTwo />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/pokemon/:name",
        index: true,
        element: <Details />,
      },
    ],
  },
]);

export default rootRouter;
