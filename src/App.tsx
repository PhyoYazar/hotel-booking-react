import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routerConfig from "./router/routerConfig";
// import { getToken, setToken } from "./services/auth";
// import type { APILoginResInterface } from "./lib/interface";
import { apiController, apiRoutes } from "./controllers";

function App() {
  const router = createBrowserRouter(routerConfig);

  console.log("App components is rerendering");

  return <RouterProvider router={router} />;
}

export default App;
