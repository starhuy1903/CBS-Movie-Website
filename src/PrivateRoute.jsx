import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const checkLogin = () => !!localStorage.getItem('token');

const PrivateRoute = () => {
    return checkLogin() ? (
        <Outlet />
    ) : (<Navigate to="/login" />)
};

export default PrivateRoute;