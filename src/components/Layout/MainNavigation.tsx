import { Link } from "react-router-dom";

interface NavInterface {
  isLogin?: boolean;
}

const MainNavigation = ({ isLogin }: NavInterface) => {
  return (
    <header className="bg-neutral200">
      <div className="flex-between container py-6">
        <Link to="/">
          <div className="">All Hotels</div>
        </Link>

        <nav className="">
          <ul className="flex items-center space-x-10">
            {isLogin && (
              <Link to="/auth/my-bookings">
                <li className="">My Bookings</li>
              </Link>
            )}

            {isLogin ? (
              <Link to="/auth/profile">
                <li className="">Profile</li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="">Login</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
