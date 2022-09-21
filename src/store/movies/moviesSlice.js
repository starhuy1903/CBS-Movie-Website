import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/api";
import {HTTP_STATUS} from "../../api/httpStatusConstants";

export const fetchMoviesList = createAsyncThunk(
    "movies/fetchMoviesList", async (currentPage, {rejectWithValue}) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
                method: "GET",
                params: {
                    maNhom: "GP02",
                    soTrang: currentPage,
                    soPhanTuTrenTrang: 10,
                }
            })
            return res.data.content;
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    }, {
        condition: (__, {getState}) => {
            const {movies} = getState()
            if (movies.loading === HTTP_STATUS.PENDING)
                return false;

            return true;
        }
    }
)

const initialState = {
    data: null,
    loading: null,
    error: null
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchMoviesList.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchMoviesList.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchMoviesList.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const selectMovieList = state => state.movies.data;
export const getMoviesLoading = (state) => state.movies.loading;
export const getMoviesError = (state) => state.movies.error;

export default moviesSlice.reducer;