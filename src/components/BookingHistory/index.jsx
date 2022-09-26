import React, {useState} from 'react';
import TableContainer from '@mui/material/TableContainer';
import {Box, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {formatDate} from "../../utils/date";
import {CodeScan, DetailItem, Details, MovieInfo, MovieName} from "../TicketInfo/TicketInfo.styles";
import Barcode from "../Barcode";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: 600, sm: 500, xs: '95%'},
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4
};

const BookingHistory = ({profile}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleChooseTicket = (ticket) => {
        handleOpen();
        setSelectedTicket(ticket);
    }

    if (!profile?.thongTinDatVe) return null;

    const {thongTinDatVe: bookingInfo} = profile;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 550}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                <h1 style={{color: "black"}}>Booking History</h1>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingInfo.map((row) => (
                            <TableRow
                                key={row.maVe}
                                sx={{
                                    '&:last-child td, &:last-child th': {border: 0},
                                    cursor: "pointer",
                                    '&:hover': {backgroundColor: 'lightgray'}

                                }}
                                onClick={() => handleChooseTicket(row)}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    <img src={row.hinhAnh} alt=""
                                         style={{height: "70px", width: "50px", objectFit: 'cover'}}/>
                                </TableCell>
                                <TableCell align="left">
                                    <div>
                                        <h1 style={{color: 'black', fontSize: '20px'}}>{row.tenPhim}</h1>
                                        <p style={{color: 'black'}}>Booking day: {formatDate(row.ngayDat)}</p>
                                        <p style={{color: 'black'}}>Cinema: {row.danhSachGhe[0].tenHeThongRap}</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h1" sx={{fontSize: '30px', color: 'black', marginBottom: '1rem', textAlign: 'center'}}>
                        Ticket Info
                    </Typography>
                    <MovieInfo>
                        <MovieName>{selectedTicket?.tenPhim}</MovieName>
                        <Details>
                            <DetailItem>
                                <h5>Cluster</h5>
                                <p>{selectedTicket?.danhSachGhe[0].tenHeThongRap}</p>
                            </DetailItem>
                            <DetailItem>
                                <h5>Cinema</h5>
                                <p>{selectedTicket?.danhSachGhe[0].tenRap}</p>
                            </DetailItem>
                            <DetailItem>
                                <h5>Duration</h5>
                                <p>{selectedTicket?.thoiLuongPhim}'</p>
                            </DetailItem>
                            <DetailItem>
                                <h5>Booking Day</h5>
                                <p>{selectedTicket && formatDate(selectedTicket.ngayDat)}</p>
                            </DetailItem>
                            <DetailItem>
                                <h5>Seats</h5>
                                <p>
                                    {selectedTicket?.danhSachGhe.map((seat) => seat.tenGhe + " ")}
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
                            {/*{selectedTicket && <Barcode id={selectedTicket.maVe} />}*/}
                            <Barcode id={selectedTicket?.maVe}/>
                        </CodeScan>
                    </MovieInfo>
                </Box>
            </Modal>
        </>
    );
};

export default BookingHistory;