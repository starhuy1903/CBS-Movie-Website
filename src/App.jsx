import Layout from "./components/Layout";
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import Booking from "./pages/booking";
import {AuthRoute, PrivateRoute} from "./GuardRoute";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="detail/:movieId" element={<MovieDetail/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="booking/:showId" element={<Booking/>}/>
                </Route>

                <Route element={<AuthRoute/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<SignUp/>}/>
                </Route>
            </Route>

        </Routes>
    );
}

export default App;
