import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateOutlet() {
  const auth = useAuth();
  const location = useLocation();

  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
