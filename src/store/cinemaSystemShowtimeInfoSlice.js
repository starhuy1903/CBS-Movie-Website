import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HTTP_STATUS} from "../api/httpStatusConstants";
import api from "../api/api";

export const fetchMovieSchedule = createAsyncThunk(
    "cinemaSystemShowtimeInfo/fetchMovieSchedule", async (id, {rejectWithValue}) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
                method: "GET",
                params: {
                    maHeThongRap: id,
                    maNhom: "GP02"
                }
            })
            return res.data.content[0];
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    },
    {
        condition: (__, {getState}) => {
            const {cinemaSystemShowtimeInfo} = getState()
            if(cinemaSystemShowtimeInfo.loading === HTTP_STATUS.PENDING)
                return false;

            return true;
        }
    }
)

const initialState = {
    data: null,
    loading: null,
    error: null,
}

const cinemaSystemShowtimeInfoSlice = createSlice({
    name: "cinemaSystemShowtimeInfo",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchMovieSchedule.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchMovieSchedule.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchMovieSchedule.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const getCinemaSystemShowtimeInfo = (state) => state.cinemaSystemShowtimeInfo.data;
export const getCinemaSystemShowtimeInfoLoading = (state) => state.cinemaSystemShowtimeInfo.loading;
export const getCinemaSystemShowtimeInfoError = (state) => state.cinemaSystemShowtimeInfo.error;

export default cinemaSystemShowtimeInfoSlice.reducer;