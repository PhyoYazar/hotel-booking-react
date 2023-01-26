import PublicLayout from '../components/Layout/PublicLayout';
import AllHotelsPage from '../pages/hotel/all-hotels';
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';

export default [
  {
    path: '',
    element: <PublicLayout />,
    children: [{ index: true, element: <AllHotelsPage /> }],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'Register',
    element: <RegisterPage />,
  },
];
