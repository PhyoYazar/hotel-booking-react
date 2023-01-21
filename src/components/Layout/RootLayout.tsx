import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../../services/auth";

const isInitialized = true;
const isAuthenticated = getToken();

const RootLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isInitialized) {
      if (isAuthenticated) {
        // if (!pathname.includes("/auth/"))
        //   navigate("/", { replace: true });
      } else {
        const prevPath = pathname.includes("/auth/") ? pathname : undefined;
        navigate("/", { replace: true, state: { path: prevPath } });
      }
    }
  }, [isInitialized, isAuthenticated]);

  //   if (!isPending) return <Outlet />;
  if (true) return <Outlet />;

  return (
    <div> Loading... </div>

    // <Spin size="middle">
    //   <div style={{ width: "100%", height: "100vh" }} />
    // </Spin>
  );
};

export default RootLayout;
