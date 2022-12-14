import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CinemaInfo, Container, Guide, Item, Left, Name, ResetButton, Right, Screen} from "./Booking.styles";
import CinemaSeat from "../../components/CinemaSeat";
import TicketInfo from "../../components/TicketInfo";
import Payment from "../../components/Payment";
import {
    fetchCinemaTicket,
    getCinemaTicketError,
    getCinemaTicketStatus,
    selectCinemaTicket
} from "../../store/cinemaTicketSlice";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import Spinner from "../../components/Spinner";
import {bookingActions, getSelectedSeats} from "../../store/bookingSlice";
import {notificationActions} from "../../store/notificationSlice";
import {selectProfile} from "../../store/authSlice";

const Booking = () => {
    const {showId} = useParams();
    const dispatch = useDispatch()

    const cinemaTicket = useSelector(selectCinemaTicket)
    const loading = useSelector(getCinemaTicketStatus)
    const error = useSelector(getCinemaTicketError)
    const selectedSeats = useSelector(getSelectedSeats)
    const profile = useSelector(selectProfile)

    useEffect(() => {
        dispatch(fetchCinemaTicket(showId))
        dispatch(bookingActions.resetSelectedSeats())
    }, [dispatch, showId])

    const handleReset = () => {
        dispatch(bookingActions.resetSelectedSeats())
    }

    let content;
    if(loading === HTTP_STATUS.PENDING) {
        content = <Spinner />
    } else if(loading === HTTP_STATUS.REJECTED) {
        dispatch(notificationActions.createAlert({
            msg: error,
            type: "error"
        }))
    } else if(loading === HTTP_STATUS.FULFILLED) {
        content = (
            <>
                <Left>
                    <CinemaInfo>
                        <Name>{cinemaTicket.thongTinPhim.tenCumRap}</Name>
                        <Screen />
                    </CinemaInfo>
                    <CinemaSeat seatList={cinemaTicket.danhSachGhe} />
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
                    <TicketInfo profile={profile} selectedSeats={selectedSeats} movieInfo={cinemaTicket.thongTinPhim} />
                    <Payment />
                </Right>
            </>
        )
    }

    return (
        <Container>
            {content}
        </Container>
    );
};

export default Booking;