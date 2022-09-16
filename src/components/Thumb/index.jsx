import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "./Thumb.styles";

const Thumb = ({image, movieId}) => {
    return (
        <Container>
            <Link to={`/detail/${movieId}`}>
                <img src={image} alt="movie thumb"/>
            </Link>
        </Container>


    );
};

export default Thumb;