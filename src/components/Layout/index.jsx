import React, {useEffect} from 'react';
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import {Outlet, useLocation} from "react-router-dom";
import {GlobalStyle} from "../../GlobalStyle";
import Notification from "../Notification";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0)
    }, [location.pathname])

    return (
        <>
            <MainNavigation />
            <main style={{minHeight: "70vh"}}>
                <Outlet />
            </main>
            <Footer />
            <GlobalStyle/>
            <Notification />
        </>
    );
};

export default Layout;