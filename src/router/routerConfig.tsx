import PrivateLayout from "../components/Layout/PrivateLayout";
import AllPostsPage from "../pages/all-posts";
import ErrorPage from "../pages/error";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const routerConfig: any = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      // PUBLIC ROUTES
      { path: "", children: publicRoutes },

      // PRIVATE ROUTES
      {
        path: "auth",
        element: <PrivateLayout />,
        children: privateRoutes,
      },
    ],
  },
];

export default routerConfig;
