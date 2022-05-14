import React from "react";
import { Route, Redirect, useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/login?redirect=${pathname}${search}`} />
  );
}
