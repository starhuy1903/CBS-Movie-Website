import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";

export const signIn = createAsyncThunk("auth/signIn", async (user) => {
    const res = await api.request({
        url: '/api/QuanLyNguoiDung/DangNhap',
        method: "POST",
        data: user
    })

    const profile = {...res.data.content}
    delete profile.accessToken;

    localStorage.setItem('token', res.data.content.accessToken)
    return profile;
})

export const fetchProfile = createAsyncThunk("auth/fetchProfile", async () => {
    const res = await api.request({
        url: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
        method: "POST",
    })

    return res.data.content;
})

export const updateProfile = createAsyncThunk("auth/updateProfile", async (updatedUser) => {
    const res = await api.request({
        url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: updatedUser,
    })

    return res.data.content;
})

const initialState = {
    profile: null,
    status: 'idle',
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profile = action.payload;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

            .addCase(fetchProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profile = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

            .addCase(updateProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profile = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
})

export const selectProfile = (state) => state.auth.profile;
export const getAuthStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;

export const authActions = authSlice.actions;

export default authSlice.reducer;