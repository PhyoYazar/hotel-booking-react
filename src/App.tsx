import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import setupInterceptorsTo from "./controllers/axiosInterceptors";
import routerConfig from "./router/routerConfig";
import { getToken, setToken } from "./services/auth";
import type { APILoginResInterface } from "./lib/interface";

setupInterceptorsTo(axios);

function App() {
  const router = createBrowserRouter(routerConfig);

  useEffect(() => {
    console.log("rerendering...");

    // (async () => {
    //   const res = await axios.post<APILoginResInterface>("/auth/login", {
    //     email: "pyz@gmail.com",
    //     password: "123456",
    //   });

    //   if (res.data.status === "success") {
    //     setToken({ j_token: res.data.token });
    //   }

    // })();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
