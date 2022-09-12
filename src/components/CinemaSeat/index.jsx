import React, {useState} from 'react';
import {Container, Row, Seat, Table, TableBody} from "./CinemaSeat.styles";
import {useDispatch, useSelector} from "react-redux";
import {bookingActions} from "../../store/booking/bookingSlice";

const CinemaSeat = ({seatList}) => {
    const SEAT_PER_ROW = 16;
    const dispatch = useDispatch()
    const selectedSeats = useSelector(state => state.booking.selectedSeats)

    if (!seatList)
        return <p>Loading...</p>

    const handleChooseSeat = (seat) => {
        if(seat.daDat) return;

        const foundSeat = selectedSeats?.find(selectedSeat => selectedSeat.maGhe === seat.maGhe)
        if (foundSeat) {
            dispatch(bookingActions.setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat.maGhe !== seat.maGhe)))
            return;
        }
        if(selectedSeats.length === 8) return;
        dispatch(bookingActions.setSelectedSeats([...selectedSeats, seat]))
    }

    // console.log(selectedSeats)
    // console.log("re-rendered")

    const renderSeat = () => {
        const seatRow = [];
        for (let i = 0; i < seatList.length / SEAT_PER_ROW; i++) {
            const row = seatList.slice(i * SEAT_PER_ROW, SEAT_PER_ROW * (i + 1));
            seatRow.push(row);
        }

        const rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']

        return seatRow.map((row, index) => (
            <Row key={index}>
                {row.map((seat, stt) => (
                    <Seat
                        key={seat.maGhe}
                        onClick={() => handleChooseSeat({...seat, cinemaSeatName: rowName[index] + String(stt + 1)})}
                        disable={seat.daDat}
                        selected={Boolean(selectedSeats?.find(selectedSeat => selectedSeat.maGhe === seat.maGhe))}
                        vip={seat.loaiGhe === 'Vip'}
                    >
                        {rowName[index]}{stt + 1}
                    </Seat>
                ))}
            </Row>
        ))
    }

    return (
        <Container>
            <Table>
                <TableBody>
                    {renderSeat()}
                </TableBody>
            </Table>
        </Container>
    );
};

export default CinemaSeat;