import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import PublicLayout from "../components/Layout/PublicLayout";
import AllPostsPage from "../pages/all-posts";

export default [
  {
    path: "",
    element: <PublicLayout />,
    children: [{ index: true, element: <AllPostsPage /> }],
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
