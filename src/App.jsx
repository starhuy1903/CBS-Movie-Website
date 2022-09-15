import Layout from "./components/Layout";
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Profile from "./pages/profile";
import Booking from "./pages/booking";
import {GlobalStyle} from "./GlobalStyle";
import {AuthRoute, PrivateRoute} from "./GuardRoute";
import {fetchProfile} from "./store/auth/authSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(fetchProfile())
        }
    }, [])

    return (
        <Layout>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="/detail/:movieId" element={<MovieDetail/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/booking/:showId" element={<Booking/>}/>
                    </Route>
                    <Route element={<AuthRoute />}>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                    </Route>
                </Route>



            </Routes>
            <GlobalStyle/>
            {/*<Notification />*/}
        </Layout>
    );
}

export default App;
