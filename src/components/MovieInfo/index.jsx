import React from 'react';
import {useSelector} from "react-redux";
import Spinner from "../Spinner";
import {Container, Content, Description, Image, ImageWrapper, Title} from "./MovieInfo.styles";
import {getSelectedMovie} from "../../store/selectedMovieSlice";
import {useModal} from "../../hooks/useModal";

import VideoModal from "../VideoModal";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const MovieInfo = () => {
    const movie = useSelector(getSelectedMovie)
    const { isShowing, toggle } = useModal()

    let content;
    if(!movie) {
        content = <Spinner/>;
    } else {
        content = (
            <Content>
                <ImageWrapper>
                    <Image src={movie.hinhAnh} alt="poster"/>
                    <PlayCircleOutlineIcon className="playIcon" onClick={toggle} />

                    <VideoModal isShowing={isShowing} hide={toggle} videoSrc={movie.trailer} />
                </ImageWrapper>

                <Description>
                    <Title>{movie.tenPhim}</Title>
                    <h3>PLOT</h3>
                    <p>{movie.moTa}</p>

                    {movie.hot && <div className="sticker">Hot</div>}
                </Description>
            </Content>
        )
    }

    return (
        <Container>
            {content}
        </Container>
    )
        ;
};

export default MovieInfo;