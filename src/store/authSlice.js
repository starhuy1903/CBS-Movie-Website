import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api/api";
import {HTTP_STATUS} from "../api/httpStatusConstants";

export const signIn = createAsyncThunk(
    "auth/signIn",
    async (user, {rejectWithValue}) => {
        try {
            const res = await api.request({
                url: '/api/QuanLyNguoiDung/DangNhap',
                method: "POST",
                data: user
            })

            const profile = {...res.data.content}
            delete profile.accessToken;

            localStorage.setItem('token', res.data.content.accessToken)
            return profile;
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    })

export const signUp = createAsyncThunk(
    "auth/signUp",
    async (user, {rejectWithValue}) => {

        try {
            await api.request({
                url: '/api/QuanLyNguoiDung/DangKy',
                method: "POST",
                data: user
            })
        } catch (err) {
            return rejectWithValue(err.response.data.content)
        }
    })

export const fetchProfile = createAsyncThunk(
    "auth/fetchProfile",
    async () => {
        const res = await api.request({
            url: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: "POST",
        })

        return res.data.content;
    })

export const updateProfile = createAsyncThunk(
    "auth/updateProfile",
    async (updatedUser) => {

        const res = await api.request({
            url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            method: "PUT",
            data: updatedUser,
        })

        return res.data.content;
    })

const initialState = {
    data: null,
    status: null,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        resetStatus(state) {
            state.status = null;
        },
        resetError(state) {
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = HTTP_STATUS.PENDING
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = HTTP_STATUS.REJECTED
                state.error = action.payload;
            })

            .addCase(signUp.pending, (state) => {
                state.status = HTTP_STATUS.PENDING
            })
            .addCase(signUp.fulfilled, (state) => {
                state.status = HTTP_STATUS.FULFILLED;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = HTTP_STATUS.REJECTED
                state.error = action.payload;
            })

            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.data = action.payload;
            })

            .addCase(updateProfile.pending, (state) => {
                state.status = HTTP_STATUS.PENDING
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.status = HTTP_STATUS.FULFILLED;
                state.data = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.status = HTTP_STATUS.REJECTED
                state.error = action.payload.content;
            })


    }
})

export const selectProfile = (state) => state.auth.data;
export const getAuthStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;

export const authActions = authSlice.actions;

export default authSlice.reducer;