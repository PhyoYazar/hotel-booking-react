import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <>
      <div>PrivateLayout</div>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
