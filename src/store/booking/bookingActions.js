import api from "../../api/api";
import {bookingActions} from "./bookingSlice";
import {uiActions} from "../ui/uiSlice";

export const fetchMovieAction = (config, changeTotalCount) => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await api.request({
                url: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
                method: "GET",
                params: {
                    maNhom: "GP02",
                    soTrang: config.currentPage,
                    soPhanTuTrenTrang: config.pageSize,
                }
            })
            return res.data.content;
        }
        try {
            dispatch(uiActions.setLoading(true))
            const data = await fetchHandler();
            // changeTotalCount(data.totalCount);
            dispatch(bookingActions.setMovies(data))
            // console.log('callAPI - async')
            // console.log(config.currentPage)
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading(false))
        }

    }
}

export const fetchMovieDetailAction = (movieId) => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await api.request({
                url: "/api/QuanLyPhim/LayThongTinPhim",
                method: "GET",
                params: {
                    MaPhim: movieId
                }
            })
            return res.data.content;
        }

        try {
            dispatch(uiActions.setLoading(true))
            const data = await fetchHandler();
            // console.log(data)
            dispatch(bookingActions.setSelectedMovie(data))

        } catch (error) {
            console.log(error)
        } finally {
            dispatch(uiActions.setLoading(false))
        }
    }
}

export const fetchCinemasAction = async (dispatch) => {
    try {
        const res = await api.request({
            url: "/api/QuanLyRap/LayThongTinHeThongRap",
            method: "GET",
        })

        dispatch(bookingActions.setCinemas(res.data.content))
        return res.data.content
    } catch (error) {
        console.log(error)
    }
}


export const fetchMovieScheduleAction = (movieId) => {
    return async (dispatch) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
                method: "GET",
                params: {
                    maHeThongRap: movieId,
                    maNhom: "GP02"
                }
            })

            dispatch(bookingActions.setSchedule(res.data.content))
        } catch (error) {
            console.log(error)
        }
    }
}