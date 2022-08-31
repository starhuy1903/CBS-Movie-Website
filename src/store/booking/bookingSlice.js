import {createSlice} from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        movies: null,
        selectedMovie: null,
        cinemas: null,
        schedule: null
    },
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        setCinemas(state, action) {
            state.cinemas = action.payload;
        },
        setSchedule(state, action) {
            state.schedule = action.payload[0];
        }
    }
})

export const bookingActions = bookingSlice.actions;

export default bookingSlice;