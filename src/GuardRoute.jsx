import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const checkLogin = () => !!localStorage.getItem('token');

export const PrivateRoute = () => {
    return checkLogin() ? (
        <Outlet />
    ) : (<Navigate to="/login" />)
};

export const AuthRoute = () => {
    return !checkLogin() ? (
        <Outlet />
    ) : (<Navigate to="/" /> )
}