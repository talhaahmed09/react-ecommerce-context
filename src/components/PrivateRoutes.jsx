import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthProvider';

const PrivateRoutes = () => {
    const {state} = useAuth();
    const location = useLocation();

  return (
        state.isLoggedIn? <Navigate to="/checkout" state={{from: location}} replace/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default PrivateRoutes