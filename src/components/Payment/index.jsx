import React from 'react';
import {
    Amount,
    Button,
    Container,
    Content, Message,
    Method,
    MethodContainer,
    Voucher
} from "./Payment.styles";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaymentIcon from '@mui/icons-material/Payment';
import ZaloPayImg from '../../assets/images/zalopay-logo.png'
import MomoImg from '../../assets/images/momo-logo.png'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
    bookCinemaTicket,
    bookingActions,
    getBookingLoading,
    getSelectedSeats
} from "../../store/bookingSlice";
import {fetchCinemaTicket, selectCinemaTicket} from "../../store/cinemaTicketSlice";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import Spinner from "../Spinner";
import AlertDialog from "../AlertDialog";


const Payment = () => {
    const selectedSeats = useSelector(getSelectedSeats)
    const cinemaTicket = useSelector(selectCinemaTicket)
    const dispatch = useDispatch();
    const {showId} = useParams();

    const bookingLoading = useSelector(getBookingLoading)

    const amount = selectedSeats.reduce((acc, seat) => acc + seat.giaVe, 0);
    const canPayment = selectedSeats.length !== 0;

    const handlePayment = () => {
        const data = {
            maLichChieu: cinemaTicket.thongTinPhim.maLichChieu,
            danhSachVe: selectedSeats.map(seat => ({
                maGhe: seat.maGhe,
                giaVe: seat.giaVe
            }))
        }
        dispatch(bookCinemaTicket(data))
    }

    const handleFinish = (isContinue) => {
        dispatch(bookingActions.resetLoading())
        if(isContinue)
            dispatch(fetchCinemaTicket(showId))
    }

    let notiMess;
    if (bookingLoading === HTTP_STATUS.FULFILLED) {
        notiMess = (
            <AlertDialog msg="Booking Ticket successfully!" handleFinish={handleFinish} />
        )
    } else if (bookingLoading === HTTP_STATUS.REJECTED) {
        notiMess = (
            <AlertDialog msg="Booking Ticket failed :))" handleFinish={handleFinish} />
        )
    }

    return (
        <Container>
            <Content>
                <Voucher>
                    <input type="text" placeholder="Voucher"/>
                    <button>Apply</button>
                </Voucher>
                <MethodContainer>
                    <h5>Payment Method</h5>
                    {canPayment ? (
                        <>
                            <Method>
                                <input type="radio" name="paymentMethod" value="mono"/>
                                <label htmlFor="">
                                    <img src={MomoImg} alt=""/>
                                    Pay with Momo
                                </label>
                            </Method>
                            <Method>
                                <input type="radio" name="paymentMethod" value="zalopay"/>
                                <label htmlFor="">
                                    <img src={ZaloPayImg} alt=""/>
                                    Pay with ZaloPay
                                </label>
                            </Method>
                            <Method>
                                <input type="radio" name="paymentMethod" value="atm"/>
                                <label htmlFor="">
                                    <LocalAtmIcon/>
                                    ATM
                                </label>
                            </Method>
                            <Method>
                                <input type="radio" name="paymentMethod" value="visa-master-jcb"/>
                                <label htmlFor="">
                                    <PaymentIcon/>
                                    Pay by Visa, Master, JCB
                                </label>
                            </Method>
                        </>
                    ) : (
                        <Message>
                            Please select your seat before
                        </Message>
                    )}
                </MethodContainer>

                {bookingLoading !== HTTP_STATUS.PENDING ? (
                    <Button
                        onClick={handlePayment}
                        disable={!canPayment}
                    >
                        <span>Checkout</span>
                        <Amount>{parseInt(amount).toLocaleString()} đ</Amount>
                    </Button>
                ) : (
                    <Spinner/>
                )}

            </Content>
            {notiMess}
        </Container>
    );
};

export default Payment;