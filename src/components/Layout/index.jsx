import React from 'react';
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation />
            <main style={{minHeight: "70vh"}}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;