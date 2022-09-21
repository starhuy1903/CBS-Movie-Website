import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";
import {HTTP_STATUS} from "../../api/httpStatusConstants";

export const fetchBannerList = createAsyncThunk(
    "banner/fetchBannerList", async (__, {fulfillWithValue}) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyPhim/LayDanhSachBanner",
                method: "GET",
            })

            return res.data.content;
        } catch (err) {

        }

    },
    {
        condition: (__, {getState}) => {
            const {banner} = getState()
            if (banner.loading === HTTP_STATUS.PENDING)
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

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchBannerList.pending, (state) => {
                state.loading = HTTP_STATUS.PENDING;
            })
            .addCase(fetchBannerList.fulfilled, (state, action) => {
                state.loading = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(fetchBannerList.rejected, (state, action) => {
                state.loading = HTTP_STATUS.REJECTED;
                state.error = action.payload;
            })
    }
})

export const getBanner = (state) => state.banner.data;
export const getBannerLoading = (state) => state.banner.loading;
export const getBannerError = (state) => state.banner.error;

export default bannerSlice.reducer;