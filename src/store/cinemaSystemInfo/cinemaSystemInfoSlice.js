import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import api from "../../api/api";

export const fetchCinemaSystemInfo = createAsyncThunk(
    "cinemaSystemInfo/fetchCinemaSystemInfo", async (__, {rejectWithValue}) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyRap/LayThongTinHeThongRap",
                method: "GET",
            })

            return res.data.content
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    }
)

const initialState = {
    data: null,
    loading: null,
    error: null,
}

const cinemaSystemInfoSlice = createSlice({
    name: "cinemaSystemInfo",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchCinemaSystemInfo.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchCinemaSystemInfo.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchCinemaSystemInfo.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const getCinemaSystemInfo = (state) => state.cinemaSystemInfo.data;
export const getSelectedMovieLoading = (state) => state.cinemaSystemInfo.loading;
export const getSelectedMovieError = (state) => state.cinemaSystemInfo.error;

export default cinemaSystemInfoSlice.reducer;