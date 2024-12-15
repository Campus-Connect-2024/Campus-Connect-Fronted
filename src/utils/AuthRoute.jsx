import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './HelperFunctions';

const AuthRoute = ({ children }) => {
    const accessToken = getToken(); // Get token from Redux state

    return !accessToken ? children : <Navigate to="/" />;
};

export default AuthRoute;
