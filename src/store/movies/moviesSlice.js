import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchBannerList = createAsyncThunk("movies/fetchBannerList", async () => {
    const res = await api.request({
        url: "/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
    })
    return res.data.content;
})

export const fetchMoviesList = createAsyncThunk("movies/fetchMoviesList", async (currentPage) => {
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
})

const initialState = {
    bannerList: [],
    movies: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchBannerList.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBannerList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.bannerList = action.payload;
            })
            .addCase(fetchBannerList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(fetchMoviesList.pending, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(fetchMoviesList.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(fetchMoviesList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectBannerList = state => state.movies.bannerList;
export const selectMovieList = state => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;



export default moviesSlice.reducer;