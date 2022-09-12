import React from 'react';
import {
    Amount,
    Button,
    Container,
    Content, Message,
    Method,
    MethodContainer,
    Quantity,
    TicketAmount,
    Voucher
} from "./Payment.styles";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaymentIcon from '@mui/icons-material/Payment';
import ZaloPayImg from '../../assets/images/zalopay-logo.png'
import MomoImg from '../../assets/images/momo-logo.png'
import {useDispatch, useSelector} from "react-redux";
import {bookCinemaTicket} from "../../store/booking/bookingActions";
import {useNavigate} from "react-router-dom";


const Payment = () => {
    const selectedSeats = useSelector(state => state.booking.selectedSeats)
    const cinemaTicket = useSelector(state => state.booking.cinemaTicket)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const amount = selectedSeats.reduce((acc, seat ) => acc + seat.giaVe, 0);
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

        alert('Booking was successful!')
        navigate('/')
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
                <Button
                    onClick={handlePayment}
                    disable={!canPayment}
                >
                    <span>Checkout</span>
                    <Amount>{amount} đ</Amount>
                </Button>
            </Content>
        </Container>
    );
};

export default Payment;