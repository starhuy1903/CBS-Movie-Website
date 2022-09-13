import {createSlice} from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        selectedMovie: null,
        selectedSeats: [],
        cinemaSystemInfo: null,
        cinemaSystemShowtimeInfo: null,
        cinemaTicket: null,
    },
    reducers: {
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

export default bookingSlice.reducer;