import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";
import {HTTP_STATUS} from "../../api/httpStatusConstants";

export const fetchMovieDetail = createAsyncThunk(
    "selectedMovie/fetchMovieDetail", async (movieId, {rejectWithValue}) => {
        try {
            const res = await api.request({
                    url: "/api/QuanLyPhim/LayThongTinPhim",
                    method: "GET",
                    params: {
                        MaPhim: movieId
                    }
                }
            )
            return res.data.content;
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    },
    {
        condition: (__, {getState}) => {
            const {selectedMovie} = getState()
            if (selectedMovie.loading === HTTP_STATUS.PENDING)
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

const selectedMovieSlice = createSlice({
    name: "selectedMovie",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchMovieDetail.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchMovieDetail.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchMovieDetail.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const getSelectedMovie = (state) => state.selectedMovie.data;
export const getSelectedMovieLoading = (state) => state.selectedMovie.loading;
export const getSelectedMovieError = (state) => state.selectedMovie.error;

export default selectedMovieSlice.reducer;