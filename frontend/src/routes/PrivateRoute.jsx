import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

// This PrivateRoute component uses the useAuth hook to check if a user is authenticated. If the authentication state is still loading, it displays a Loader component. If the user is not authenticated, it redirects them to the login page while preserving their intended destination. If the user is authenticated, it renders the child components passed to it. This ensures that only authenticated users can access certain routes in the application.