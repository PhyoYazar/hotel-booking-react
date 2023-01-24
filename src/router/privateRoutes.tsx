import HotelDetailPage from "../pages/hotel/hotel-detail";
import MyBookingsPage from "../pages/my-bookings";
import Profile from "../pages/profile";

export default [
  {
    path: ":hotel_id",
    element: <HotelDetailPage />,
  },
  {
    path: "my-bookings",
    element: <MyBookingsPage />,
    // loader: ({ request }) =>
    //   fetch("/api/dashboard.json", {
    //     signal: request.signal,
    //   }),
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
