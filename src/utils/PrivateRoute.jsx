import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './HelperFunctions';

const PrivateRoute = ({ children }) => {
    const  accessToken = getToken();
    // console.log(accessToken);
    return accessToken ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;
