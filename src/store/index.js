import {configureStore} from "@reduxjs/toolkit";
import bookingReducer from "./booking/bookingSlice";
import authReducer from "./auth/authSlice";
import moviesReducer from "./movies/moviesSlice";
import selectedMovieReducer from './selectedMovie/selectedMovieSlice'
import bannerReducer from './banner/bannerSlice'
import cinemaSystemInfoReducer from './cinemaSystemInfo/cinemaSystemInfoSlice'
import cinemaSystemShowtimeInfoReducer from './cinemaSystemShowtimeInfo/cinemaSystemShowtimeInfoSlice'
import cinemaTicketReducer from './cinemaTicket/cinemaTicketSlice'

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        booking: bookingReducer,
        auth: authReducer,
        selectedMovie: selectedMovieReducer,
        banner: bannerReducer,
        cinemaSystemInfo: cinemaSystemInfoReducer,
        cinemaSystemShowtimeInfo: cinemaSystemShowtimeInfoReducer,
        cinemaTicket: cinemaTicketReducer
    }
})

export default store;