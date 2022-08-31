import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCinemasAction, fetchMovieScheduleAction} from "../../store/booking/bookingActions";
import {formatDate} from "../../utils/date";
import {useParams} from "react-router-dom";
import './showTime.scss'

const ShowTime = () => {
    const [selectedCinema, setSelectedCinema] = useState(null);
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const cinemas = useSelector(state => state.booking.cinemas)
    const schedule = useSelector(state => state.booking.schedule)

    const fetchMovieSchedule = (id) => {
        dispatch(fetchMovieScheduleAction(id))
    }

    const fetchCinemas = async () => {
        const data = await dispatch(fetchCinemasAction)
        fetchMovieSchedule(data[0].maHeThongRap);
        // setSelectedCinema()
    }

    useEffect(() => {
        fetchCinemas();
    }, [])

    const handleChangeCinema = (cinemaId) => {
        fetchMovieSchedule(cinemaId);
    }

    return (
        <div className="showTime">
            <div className="left">
                <h3 className="title">Choose a cinema</h3>
                {cinemas?.map(item => (
                    <img
                        className="logo"
                        onClick={() => handleChangeCinema(item.maHeThongRap)}
                        key={item.maHeThongRap}
                        src={item.logo}
                        alt="logo"
                    />
                ))}
            </div>
            <div className="right">
                <h3 className="title">Choose Showtime</h3>
                {schedule?.lstCumRap.map(item => {
                    const currentMovie = item.danhSachPhim.find(movie => movie.maPhim.toString() === movieId);

                    if (!currentMovie) return null;

                    return (
                        <div key={item.maCumRap} className="info">
                            <img className="movieImg" src={item.hinhAnh} alt=""/>
                            <div className="movieInfo">
                                <h3 className="cinemaName">{item.tenCumRap}</h3>
                                <p className="address">{item.diaChi}</p>
                                <div className="timeContainer">
                                {currentMovie.lstLichChieuTheoPhim.map(show => {
                                    return (
                                        <button
                                            key={show.maLichChieu}
                                            className="time"
                                            type="default"
                                        >
                                            {formatDate(show.ngayChieuGioChieu)}
                                        </button>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default ShowTime;