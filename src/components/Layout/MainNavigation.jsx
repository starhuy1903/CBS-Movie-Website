import React, {useState} from 'react';
import './mainNavigation.scss'
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/react-movie-logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/auth/authSlice";
import {Header, Logo, Navbar, Profile, Wrapper} from "./MainNavigation.styles";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MainNavigation = () => {
    const profile = useSelector(state => state.auth.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const handleLogout = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');
        dispatch(authActions.setProfile(null));
        navigate("/");
    }

    return (
        <Header>
            <Wrapper>
                <Logo>
                    <Link to="/">
                        <img src={logo}
                             alt="logo"/>
                    </Link>
                </Logo>
                <Navbar className={isNavExpanded && "expanded"}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">News</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <Profile>
                        {profile ? (
                            <Link to="/profile">
                                <AccountCircleIcon className="icon"/>
                                <span>{profile.hoTen}</span>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <AccountCircleIcon className="icon"/>
                                <span>Login</span>
                            </Link>
                        )}
                    </Profile>
                </Navbar>
                <MenuIcon
                    className="menuIcon"
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                />
            </Wrapper>
        </Header>
    );
};

export default MainNavigation;