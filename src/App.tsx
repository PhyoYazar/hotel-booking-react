import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllPostsPage from "./pages/all-posts";
import CreatePostPage from "./pages/create-post";
import ErrorPage from "./pages/error";
import MyPostsPage from "./pages/my-post";
import RootLayout from "./pages/root-layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <AllPostsPage /> },
        {
          path: "create-post",
          element: <CreatePostPage />,
        },
        {
          path: "my-posts",
          element: <MyPostsPage />,
          // loader: ({ request }) =>
          //   fetch("/api/dashboard.json", {
          //     signal: request.signal,
          //   }),
        },
        {
          path: "auth",
          // element: <AuthLayout />,
          children: [
            {
              path: "login",
              // element: <Login />,
              // loader: redirectIfUser,
            },
            {
              path: "sign-up",
              // action: logoutUser,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
