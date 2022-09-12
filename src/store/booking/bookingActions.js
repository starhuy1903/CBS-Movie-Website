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
            dispatch(bookingActions.setSelectedMovie(data))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(uiActions.setLoading(false))
        }
    }
}

export const fetchCinemaSystemInfoAction = async (dispatch) => {
    try {
        const res = await api.request({
            url: "/api/QuanLyRap/LayThongTinHeThongRap",
            method: "GET",
        })

        dispatch(bookingActions.setCinemaSystemInfo(res.data.content))
        return res.data.content
    } catch (error) {
        console.log(error)
    }
}


export const fetchMovieScheduleAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
                method: "GET",
                params: {
                    maHeThongRap: id,
                    maNhom: "GP02"
                }
            })

            dispatch(bookingActions.setCinemaSystemShowtimeInfo(res.data.content))
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchCinemaTicket = (showId) => {
    return async (dispatch) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyDatVe/LayDanhSachPhongVe",
                method: "GET",
                params: {
                    MaLichChieu: showId,
                }
            })

            dispatch(bookingActions.setCinemaTicket(res.data.content))
            dispatch(bookingActions.setSelectedSeats([]))
        } catch (error) {
            console.log(error)
        }
    }
}

export const bookCinemaTicket = (cinemaTickets) => {
    return async (dispatch) => {
        try {
            const res = await api.request({
                url: "/api/QuanLyDatVe/DatVe",
                method: "POST",
                data: cinemaTickets,
            })
            console.log(res)
            dispatch(bookingActions.setSelectedSeats([]))
        } catch (error) {
            console.log(error)
        }
    }
}