import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import MovieDetail from "./pages/movieDetail";
import Login from "./pages/login";
import Notification from "./components/Notification";
import SignUp from "./pages/signUp";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProfileAction} from "./store/auth/authActions";
import Profile from "./pages/profile";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("loading")
        dispatch(fetchProfileAction)
    }, [])

  return (
      <Layout>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/detail/:movieId" element={<MovieDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/*<Notification />*/}
      </Layout>
  );
}

export default App;
