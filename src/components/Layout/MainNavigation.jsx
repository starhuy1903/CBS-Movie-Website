import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/images/react-movie-logo.svg'
import {useSelector} from "react-redux";
import {Header, Logo, Navbar, Profile, Wrapper} from "./MainNavigation.styles";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {selectProfile} from "../../store/auth/authSlice";

const MainNavigation = () => {
    const profile = useSelector(selectProfile)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const location = useLocation();

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
                        {profile && (
                            <Link className="profileBtn" to="/profile">
                                <AccountCircleIcon className="icon"/>
                                <span>{profile.hoTen}</span>
                            </Link>
                        )}
                        {!profile && location.pathname !== '/login' &&
                            (<Link className="loginBtn" to="/login">
                                <span>Login</span>
                            </Link>)
                        }
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