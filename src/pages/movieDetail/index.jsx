import React from 'react';
import MovieInfo from "../../components/MovieInfo";
import './movieDetail.scss'
import ShowTime from "../../components/ShowTime";

const MovieDetail = () => {
    return (
        <div className="movieDetail">
            <MovieInfo />
            <ShowTime />
        </div>
    );
};

export default MovieDetail;