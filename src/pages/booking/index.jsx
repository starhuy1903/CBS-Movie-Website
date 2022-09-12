import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCinemaTicket} from "../../store/booking/bookingActions";
import {CinemaInfo, Container, Guide, Item, Left, Name, ResetButton, Right, Screen} from "./Booking.styles";
import CinemaSeat from "../../components/CinemaSeat";
import TicketInfo from "../../components/TicketInfo";
import Payment from "../../components/Payment";
import {bookingActions} from "../../store/booking/bookingSlice";

const Booking = () => {
    const {showId} = useParams();
    const dispatch = useDispatch()

    const cinemaTicket = useSelector(state => state.booking.cinemaTicket)

    useEffect(() => {
        dispatch(fetchCinemaTicket(showId))
    }, [dispatch])

    const handleReset = () => {
        dispatch(bookingActions.setSelectedSeats([]))
    }

    return (
        <Container>
            <Left>
                <CinemaInfo>
                    <Name>{cinemaTicket?.thongTinPhim.tenCumRap}</Name>
                    <Screen />
                    <p>Screen</p>
                </CinemaInfo>
                <CinemaSeat seatList={cinemaTicket?.danhSachGhe} />
                <Guide>
                    <Item color='var(--selectedColor)'>
                        <span />
                        selected
                    </Item>
                    <Item color='var(--availableColor)'>
                        <span />
                        available
                    </Item>
                    <Item color='var(--vipSeatColor)'>
                        <span />
                        vip
                    </Item>
                    <Item color='var(--soldColor)'>
                        <span />
                        sold
                    </Item>
                    <ResetButton onClick={handleReset}>
                        Reset
                    </ResetButton>
                </Guide>

            </Left>
            <Right>
                <TicketInfo />
                <Payment />
            </Right>
        </Container>
    );
};

export default Booking;