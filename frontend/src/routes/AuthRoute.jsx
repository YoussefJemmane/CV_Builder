import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user ? Component : <Login />}
    />
  );
};

export default ProtectedRoute;
