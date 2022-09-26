import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {formatTime} from "../../utils/date";
import {useNavigate} from "react-router-dom";
import {
    CinemaAddress, CinemaDetail,
    CinemaImage,
    CinemaInfo,
    CinemaName,
    Container,
    Left,
    Logo,
    LogoWrapper,
    Right,
    ShowTimeWrapper, TimeButton, TimeWrapper, Title
} from "./ShowTime.styles";
import {getSelectedMovie} from "../../store/selectedMovieSlice";
import {getCinemaSystemInfo} from "../../store/cinemaSystemInfoSlice";
import {
    fetchMovieSchedule,
    getCinemaSystemShowtimeInfo, getCinemaSystemShowtimeInfoError, getCinemaSystemShowtimeInfoLoading
} from "../../store/cinemaSystemShowtimeInfoSlice";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import Spinner from "../Spinner";
import {notificationActions} from "../../store/notificationSlice";

const ShowTime = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedMovie = useSelector(getSelectedMovie);
    const cinemaSystemInfo = useSelector(getCinemaSystemInfo);
    const [selectedCinemaSysId, setSelectedCinemaSysId] = useState(cinemaSystemInfo[0].maHeThongRap);

    const cinemaSystemShowtimeInfo = useSelector(getCinemaSystemShowtimeInfo);
    const loading = useSelector(getCinemaSystemShowtimeInfoLoading);
    const error = useSelector(getCinemaSystemShowtimeInfoError)

    useEffect(() => {
        dispatch(fetchMovieSchedule(cinemaSystemInfo[0].maHeThongRap))
    }, [dispatch, cinemaSystemInfo])

    const handleChangeCinema = (cinemaId) => {
        dispatch(fetchMovieSchedule(cinemaId));
        setSelectedCinemaSysId(cinemaId)
    }

    const handleTimeButton = (showId) => {
        navigate(`/booking/${showId}`)
    }

    let content;
    if (loading === HTTP_STATUS.PENDING) {
        content = <Spinner/>
    } else if (loading === HTTP_STATUS.REJECTED) {
        dispatch(notificationActions.createAlert({
            msg: error,
            type: "error"
        }))
    } else if (loading === HTTP_STATUS.FULFILLED) {
        content = cinemaSystemShowtimeInfo.lstCumRap.map(cluster => {
                const currentMovie = cluster.danhSachPhim.find(movie => movie.maPhim === selectedMovie.maPhim)

                if (!currentMovie) return null;

                return (
                    <CinemaInfo key={cluster.maCumRap}>
                        <CinemaImage src={cluster.hinhAnh} alt="movie-image"/>
                        <CinemaDetail>
                            <CinemaName>{cluster.tenCumRap}</CinemaName>
                            <CinemaAddress>{cluster.diaChi}</CinemaAddress>
                            <TimeWrapper>
                                {currentMovie.lstLichChieuTheoPhim.map(showTime => (
                                    <TimeButton
                                        key={showTime.maLichChieu}
                                        onClick={() => handleTimeButton(showTime.maLichChieu)}
                                    >
                                        {formatTime(showTime.ngayChieuGioChieu)}
                                    </TimeButton>
                                ))}
                            </TimeWrapper>
                        </CinemaDetail>
                    </CinemaInfo>
                )
            }
        )

        if (content.every(item => item === null))
            content = <p>No showtime</p>
    }

    return (
        <Container>
            <Left>
                <Title>Choose a cinema</Title>
                <LogoWrapper>
                    {cinemaSystemInfo?.map(cinemaSystem => (
                        <Logo
                            className={cinemaSystem.maHeThongRap === selectedCinemaSysId && 'active'}
                            onClick={() => handleChangeCinema(cinemaSystem.maHeThongRap)}
                            key={cinemaSystem.maHeThongRap}
                            src={cinemaSystem.logo}
                            alt="logo"
                        />
                    ))}
                </LogoWrapper>
            </Left>

            <Right>
                <Title>Choose Showtime</Title>
                <ShowTimeWrapper>
                    {content}
                </ShowTimeWrapper>
            </Right>
        </Container>
    );
};

export default ShowTime;