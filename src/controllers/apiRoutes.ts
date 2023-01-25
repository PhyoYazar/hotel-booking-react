export const apiRoutes = {
  // auth
  register: `post:auth/signup`,
  login: `post:auth/login`,
  forgotPassword: `post:auth/forgotPassword`,
  resetPassword: `patch:auth/resetPassword`,

  // hotel
  getAllHotels: `get:hotels`,

  // bookings

  // users
  updateUserName: `patch:users/updateMe`,
};
