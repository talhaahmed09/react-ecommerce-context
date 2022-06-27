import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthProvider';

const PublicRoutes = () => {
    const {state} = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    return (
      state?.isLoggedIn?  <Navigate to={from}/> : <Outlet/>
  )
}

export default PublicRoutes