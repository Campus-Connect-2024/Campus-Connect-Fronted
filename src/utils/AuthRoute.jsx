import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth); // Get token from Redux state

    return !token ? children : <Navigate to="/" />;
};

export default AuthRoute;
