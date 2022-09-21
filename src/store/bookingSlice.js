import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api/api";
import {HTTP_STATUS} from "../api/httpStatusConstants";

export const bookCinemaTicket = createAsyncThunk(
    "booking/bookCinemaTicket", async (cinemaTickets, {rejectWithValue}) => {
        try {
            await api.request({
                url: "/api/QuanLyDatVe/DatVe",
                method: "POST",
                data: cinemaTickets,
            })

        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    })


const initialState = {
    selectedSeats: [],
    loading: null,
    error: null,
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setSelectedSeats(state, action) {
            state.selectedSeats = action.payload;
        },
        resetSelectedSeats(state, action) {
            state.selectedSeats = [];
        },
        resetLoading(state) {
            state.loading = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(bookCinemaTicket.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(bookCinemaTicket.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.error = null;
                state.selectedSeats = [];
            })
            .addCase(bookCinemaTicket.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const getSelectedSeats = (state) => state.booking.selectedSeats;
export const getBookingLoading = (state) => state.booking.loading;
export const getBookingError = (state) => state.booking.error;

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;