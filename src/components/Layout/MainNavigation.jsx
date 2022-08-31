import React from 'react';
import './mainNavigation.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/react-movie-logo.svg'

const MainNavigation = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <Link className="logo" to="/">
                    <img className="logoImg"
                         src={logo}
                         alt="logo"/>
                </Link>
                <nav className="navContainer">
                    <ul className="nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">News</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Link className="loginBtn" to="/login">Login</Link>

            </div>
        </header>
    );
};

export default MainNavigation;