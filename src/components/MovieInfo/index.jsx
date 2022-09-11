import React, {useCallback, useEffect} from 'react';
import './movieInfo.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieDetailAction} from "../../store/booking/bookingActions";

const MovieInfo = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.booking.selectedMovie)

    const fetchMovieDetail = useCallback(() => {
        dispatch(fetchMovieDetailAction(movieId))
    }, [dispatch])

    useEffect(() => {
        fetchMovieDetail();
    }, [])

    if(!movie) {
        return <p>Loading...</p>
    }

    return (
        <div className="movieInfo">
            <div className="wrapper">
                <div className="content">
                    <iframe
                        className="video"
                        width="720"
                        src={movie.trailer}
                        title="Tuesday Mood - Spotify chill playlist ♫ Acoustic Love Songs 2022🍃Chill Music cover of popular songs"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>

                    <div className="description">
                        <h1 className="title">{movie.tenPhim}</h1>
                        <h3>PLOT</h3>
                        <p>{movie.moTa}</p>

                        {movie.hot && <div className="sticker">Hot</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;