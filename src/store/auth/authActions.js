import api from "../../api/api";
import {authActions} from "./authSlice";

export const fetchProfileAction = async (dispatch) => {
    try {
        const res = await api.request({
            url: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: "POST",
        })

        dispatch(authActions.setProfile(res.data.content))
        // console.log(res.data.content)
    } catch (error) {
        console.log(error)
    }
}

export const updateProfileAction = (updatedUser) => {
    return async (dispatch) => {
        try {
            // console.log(JSON.parse(JSON.stringify(updatedUser)))
            const res = await api.request({
                url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                method: "PUT",
                data: updatedUser,
            })
            console.log(res.data.content)
            dispatch(authActions.setProfile(updatedUser))
        } catch (error) {
            console.log(error)
        }
    }
}