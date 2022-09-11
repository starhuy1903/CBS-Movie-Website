import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCinemaSystemInfoAction, fetchMovieScheduleAction} from "../../store/booking/bookingActions";
import {formatDate} from "../../utils/date";
import {Link, useNavigate, useParams} from "react-router-dom";
import './showTime.scss'
import TimeButton from "../TimeButton";

const ShowTime = () => {
    const [selectedCinema, setSelectedCinema] = useState(null);
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cinemaSystemInfo = useSelector(state => state.booking.cinemaSystemInfo)
    const cinemaSystemShowtimeInfo = useSelector(state => state.booking.cinemaSystemShowtimeInfo)

    const fetchMovieSchedule = (id) => {
        dispatch(fetchMovieScheduleAction(id))
    }

    const fetchCinemas = async () => {
        const data = await dispatch(fetchCinemaSystemInfoAction)
        fetchMovieSchedule(data[0].maHeThongRap);
        setSelectedCinema(data[0].maHeThongRap);
    }

    useEffect(() => {
        fetchCinemas();
    }, [])

    const handleChangeCinema = (cinemaId) => {
        fetchMovieSchedule(cinemaId);
    }

    const handleTimeButton = (showId) => {
        navigate(`/booking/${showId}`)
    }

    return (
        <div className="showTime">
                <div className="left">
                    <h3 className="title">Choose a cinema</h3>
                    {cinemaSystemInfo?.map(cinemaSystem => (
                        <img
                            className="logo"
                            onClick={() => handleChangeCinema(cinemaSystem.maHeThongRap)}
                            key={cinemaSystem.maHeThongRap}
                            src={cinemaSystem.logo}
                            alt="logo"
                        />
                    ))}
                </div>
                <div className="right">
                    <h3 className="title">Choose Showtime</h3>
                    {cinemaSystemShowtimeInfo?.lstCumRap.map(cluster => {
                            const currentMovie = cluster.danhSachPhim.find(movie => movie.maPhim === Number(movieId))

                            if (!currentMovie) return null;

                            return (
                                <div key={cluster.maCumRap} className="info">
                                    <img className="movieImg" src={cluster.hinhAnh} alt=""/>
                                    <div className="movieInfo">
                                        <h3 className="cinemaName">{cluster.tenCumRap}</h3>
                                        <p className="address">{cluster.diaChi}</p>
                                        <div className="timeContainer">
                                            {currentMovie.lstLichChieuTheoPhim.map(showTime => (
                                                <button
                                                    key={showTime.maLichChieu}
                                                    className="timeButton"
                                                    onClick={() => handleTimeButton(showTime.maLichChieu)}
                                                     >
                                                    {formatDate(showTime.ngayChieuGioChieu)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
        </div>
    );
};

export default ShowTime;