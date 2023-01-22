import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const PublicLayout = () => {
  return (
    <>
      <MainNavigation />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
