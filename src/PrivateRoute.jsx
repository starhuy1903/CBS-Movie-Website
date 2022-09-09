import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const checkLogin = () => !!localStorage.getItem('token');

const PrivateRoute = () => {
    // console.log(checkLogin())
    return checkLogin() ? (
        <Outlet />
    ) : (<Navigate to="/login" />)
};

export default PrivateRoute;