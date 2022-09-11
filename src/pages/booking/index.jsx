import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCinemaTicket} from "../../store/booking/bookingActions";
import {Container, Left, Right} from "./Booking.styles";
import BookingMovieInfo from "../../components/BookingMovieInfo";
import CinemaSeat from "../../components/CinemaSeat";
import TicketInfo from "../../components/TicketInfo";
import Payment from "../../components/Payment";

const Booking = () => {
    const {showId} = useParams();
    const dispatch = useDispatch()

    // const {
    //     thongTinPhim: movieInfo,
    //     danhSachGhe: seatList
    // } = useSelector(state => state.booking.cinemaTicket)

    const cinemaTicket = useSelector(state => state.booking.cinemaTicket)

    useEffect(() => {
        dispatch(fetchCinemaTicket(showId))
    }, [dispatch])

    return (
        <Container>
            <Left>
                <BookingMovieInfo movieInfo={cinemaTicket?.thongTinPhim} />
                <CinemaSeat seatList={cinemaTicket?.danhSachGhe} />
            </Left>
            <Right>
                <TicketInfo></TicketInfo>
                <Payment></Payment>
            </Right>
        </Container>
    );
};

export default Booking;