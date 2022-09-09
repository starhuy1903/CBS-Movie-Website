import React from 'react';
import './mainNavigation.scss'
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/react-movie-logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/auth/authSlice";

const MainNavigation = () => {
    const profile = useSelector(state => state.auth.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');
        dispatch(authActions.setProfile(null));
        navigate("/");
    }

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
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
                {profile ? (
                    <button className="btn" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link className="btn" to="/login">Login</Link>
                )}

            </div>
        </header>
    );
};

export default MainNavigation;