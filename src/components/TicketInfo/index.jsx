import React from 'react';
import {useSelector} from "react-redux";
import {
    CodeScan,
    Container,
    Content,
    DetailItem,
    Details,
    Header,
    MovieInfo,
    MovieName,
    Quantity,
    Time,
    Title
} from "./TicketInfo.styles";
import Barcode from "../Barcode";

const TicketInfo = () => {
    const selectedSeats = useSelector(state => state.booking.selectedSeats)
    const cinemaTicket = useSelector(state => state.booking.cinemaTicket)
    const profile = useSelector(state => state.auth.profile)

    const movieInfo = cinemaTicket?.thongTinPhim;

    if (!movieInfo) return null;

    // console.log(selectedSeats)

    return (
        <Container>
            <Header>
                <Title>Ticket Booking</Title>
                <Quantity>{selectedSeats.length}</Quantity>
            </Header>
            <Content>
                <MovieInfo>
                    <MovieName>{movieInfo.tenPhim}</MovieName>
                    <Time>{movieInfo.gioChieu} | {movieInfo.ngayChieu}</Time>
                    <Details>
                        <DetailItem>
                            <h5>Cluster</h5>
                            <p>{movieInfo.tenCumRap}</p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Cinema</h5>
                            <p>{movieInfo.tenRap}</p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Time</h5>
                            <p>{movieInfo.gioChieu}</p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Day</h5>
                            <p>{movieInfo.ngayChieu}</p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Seats</h5>
                            <p>
                                {selectedSeats.map((seat, index) => (
                                    <span key={seat.maGhe}>
                                        {seat.cinemaSeatName}
                                        {selectedSeats.length !== 1 && selectedSeats.length - 1 !== index && ', '}
                                    </span>
                                ))}
                            </p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Customer</h5>
                            <p>{profile.hoTen}</p>
                        </DetailItem>
                        <DetailItem>
                            <h5>Email</h5>
                            <p>{profile.email}</p>
                        </DetailItem>
                    </Details>
                    <CodeScan>
                        <Barcode movieInfo={movieInfo} />
                    </CodeScan>

                </MovieInfo>
            </Content>
        </Container>
    );
};

export default TicketInfo;