import AllPostsPage from "../pages/all-posts";
import CreatePostPage from "../pages/create-post";
import ErrorPage from "../pages/error";
import MyPostsPage from "../pages/my-post";
import RootLayout from "../pages/root-layout";

export default [
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
];
