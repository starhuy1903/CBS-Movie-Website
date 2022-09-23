import {configureStore} from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";
import selectedMovieReducer from './selectedMovieSlice'
import bannerReducer from './bannerSlice'
import cinemaSystemInfoReducer from './cinemaSystemInfoSlice'
import cinemaSystemShowtimeInfoReducer from './cinemaSystemShowtimeInfoSlice'
import cinemaTicketReducer from './cinemaTicketSlice'
import notificationReducer from './notificationSlice'

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        booking: bookingReducer,
        auth: authReducer,
        selectedMovie: selectedMovieReducer,
        banner: bannerReducer,
        cinemaSystemInfo: cinemaSystemInfoReducer,
        cinemaSystemShowtimeInfo: cinemaSystemShowtimeInfoReducer,
        cinemaTicket: cinemaTicketReducer,
        notification: notificationReducer,
    }
})

export default store;