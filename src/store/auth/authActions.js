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