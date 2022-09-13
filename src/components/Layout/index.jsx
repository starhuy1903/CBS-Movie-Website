import React from 'react';
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;