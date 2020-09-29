import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const ProtectedRoute = (props) => {
  const { authenticated } = useAuth();

  console.log(`ProtectedRoute: ${authenticated}? ${props.path} `);
  return authenticated ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
