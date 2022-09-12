import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProfileAction} from "./store/auth/authActions";
import Profile from "./pages/profile";
import PrivateRoute from "./PrivateRoute";
import Booking from "./pages/booking";
import {GlobalStyle} from "./GlobalStyle";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("loading")
        dispatch(fetchProfileAction)
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
                </Route>

                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>

            </Routes>
            <GlobalStyle/>
            {/*<Notification />*/}
        </Layout>
    );
}

export default App;
