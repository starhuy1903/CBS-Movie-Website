import React from 'react';
import {Container, Content, DetailItem, Details, Image, MovieName, Wrapper} from "./BookingMovieInfo.styles";

const BookingMovieInfo = ({movieInfo}) => {

    if(!movieInfo)
        return <p>Loading...</p>

    return (
        <Container>
            <Wrapper>
                <MovieName>{movieInfo.tenPhim}</MovieName>
                <Content>
                    <Image src={movieInfo.hinhAnh} />
                    <Details>
                        <DetailItem><span>Time:</span> {movieInfo.gioChieu}</DetailItem>
                        <DetailItem><span>Day:</span> {movieInfo.ngayChieu}</DetailItem>
                        <DetailItem><span>Cinema:</span> {movieInfo.tenRap}</DetailItem>
                        <DetailItem><span>Cinema Cluster:</span> {movieInfo.tenCumRap}</DetailItem>
                        <DetailItem><span>Address:</span> {movieInfo.diaChi}</DetailItem>
                    </Details>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default BookingMovieInfo;