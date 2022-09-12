import {createSlice} from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bannerList: [],
        movies: null,
        selectedMovie: null,
        selectedSeats: [],
        cinemaSystemInfo: null,
        cinemaSystemShowtimeInfo: null,
        cinemaTicket: null,
    },
    reducers: {
        setBannerList(state, action) {
            state.bannerList = action.payload;
        },
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        setSelectedSeats(state, action) {
            state.selectedSeats = action.payload;
        },
        setCinemaSystemInfo(state, action) {
            state.cinemaSystemInfo = action.payload;
        },
        setCinemaSystemShowtimeInfo(state, action) {
            state.cinemaSystemShowtimeInfo = action.payload[0];
        },
        setCinemaTicket(state, action) {
            state.cinemaTicket = action.payload;
        }
    }
})

export const bookingActions = bookingSlice.actions;

export default bookingSlice;