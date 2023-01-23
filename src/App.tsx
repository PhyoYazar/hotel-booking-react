import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routerConfig from "./router/routerConfig";

function App() {
  const router = createBrowserRouter(routerConfig);

  // const { data, isLoading, error } = useAxios<HotelI>({
  //   endpoint: apiRoutes.getAllHotels,
  // });

  return <RouterProvider router={router} />;
}

export default App;
