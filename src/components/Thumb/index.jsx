import React from 'react';
import {Link} from "react-router-dom";
import './thumb.scss'

const Thumb = ({image, movieId}) => {
    return (
        <div className="thumb">
            <Link to={`/detail/${movieId}`}>
                <img src={image} alt="movie thumb"/>
            </Link>
        </div>
    );
};

export default Thumb;