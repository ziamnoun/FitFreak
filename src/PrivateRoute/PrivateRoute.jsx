import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase.config';


const PrivateRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (authenticated === null) { 
    return null;
  }

  return authenticated ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/LogIn" replace />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

export default PrivateRoute;
