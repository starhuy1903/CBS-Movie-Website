import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";
import {HTTP_STATUS} from "../../api/httpStatusConstants";

export const fetchCinemaTicket = createAsyncThunk(
    "cinemaTicket/fetchCinemaTicket", async (showId, {rejectWithValue}) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyDatVe/LayDanhSachPhongVe",
                method: "GET",
                params: {
                    MaLichChieu: showId,
                }
            })

            return res.data.content;
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    },
    {
        condition: (__, {getState}) => {
            const {cinemaTicket} = getState()
            if(cinemaTicket.loading === HTTP_STATUS.PENDING)
                return false;

            return true;
        }
    })

const initialState = {
    data: null,
    loading: null,
    error: null,
}

const cinemaTicketSlice = createSlice({
    name: "cinemaTicket",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchCinemaTicket.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchCinemaTicket.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchCinemaTicket.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const selectCinemaTicket = (state) => state.cinemaTicket.data;
export const getCinemaTicketStatus = (state) => state.cinemaTicket.loading;
export const getCinemaTicketError = (state) => state.cinemaTicket.error;

export default cinemaTicketSlice.reducer;