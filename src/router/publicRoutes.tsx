import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
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
