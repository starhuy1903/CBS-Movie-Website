import React, {useEffect} from 'react';
import MovieInfo from "../../components/MovieInfo";
import ShowTime from "../../components/ShowTime";
import {Container} from "./MovieDetail.styles";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/Spinner";
import {useParams} from "react-router-dom";
import {
    fetchMovieDetail,
    getSelectedMovieError,
    getSelectedMovieLoading
} from "../../store/selectedMovieSlice";

import {HTTP_STATUS} from "../../api/httpStatusConstants";

const MovieDetail = () => {
    const dispatch = useDispatch();
    const {movieId} = useParams();
    const loading = useSelector(getSelectedMovieLoading);
    const error = useSelector(getSelectedMovieError)

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId))
    }, [dispatch, movieId])

    let content;
    if (loading === HTTP_STATUS.PENDING) {
        content = <Spinner/>
    } else if (loading === HTTP_STATUS.REJECTED) {
        // content = <ErrorAction>{error}</ErrorAction>
    } else if (loading === HTTP_STATUS.FULFILLED) {
        content = (
            <>
                <MovieInfo/>
                <ShowTime/>
            </>
        )

    }

    return (
        <Container>
            {content}
        </Container>

    );
};

export default MovieDetail;