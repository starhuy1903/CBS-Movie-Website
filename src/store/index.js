import {configureStore} from "@reduxjs/toolkit";
import bookingReducer from "./booking/bookingSlice";
import authReducer from "./auth/authSlice";
import moviesReducer from "./movies/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        booking: bookingReducer,
        auth: authReducer,
    }
})

export default store;