import Login from "../components/LV3/auth/Login";
import Register from "../components/LV3/auth/Register";
import PublicLayout from "../components/Layout/PublicLayout";
import AllHotelsPage from "../pages/all-hotels";

export default [
  {
    path: "",
    element: <PublicLayout />,
    children: [{ index: true, element: <AllHotelsPage /> }],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
];
