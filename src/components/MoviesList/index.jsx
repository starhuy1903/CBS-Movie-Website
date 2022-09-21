import React, {useEffect} from 'react';
import Grid from "../Grid";
import Thumb from "../Thumb";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesList, getMoviesError, getMoviesLoading, selectMovieList} from "../../store/movies/moviesSlice";
import {Container} from "./MoviesList.styles";
import Spinner from "../Spinner";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import {Pagination} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const MoviesList = () => {
    const movies = useSelector(selectMovieList);
    const moviesLoading = useSelector(getMoviesLoading)
    const moviesError = useSelector(getMoviesError)

    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();

    const currentPage = new URLSearchParams(location.search).get("page") || 1

    const handleChangePage = (event, page) => {
        navigate(`/?page=${page}`)
    }

    useEffect(() => {
        dispatch(fetchMoviesList(currentPage));
    }, [dispatch, currentPage])

    let content;
    if (moviesLoading === HTTP_STATUS.PENDING) {
        content = <Spinner/>
    } else if (moviesLoading === HTTP_STATUS.REJECTED) {
        content = <h1>{moviesError}</h1>
    } else if(moviesLoading === HTTP_STATUS.FULFILLED) {
        content = (
            <>
                <Grid header="Popular Movies">
                    {movies?.items.map(movie => (
                        <Thumb
                            key={movie.maPhim}
                            image={movie.hinhAnh}
                            movieId={movie.maPhim}
                        />
                    ))}
                </Grid>
                <Pagination
                    className="pagination"
                    onChange={handleChangePage}
                    color="primary"
                    size="large"
                    count={movies?.totalPages || 0}
                    page={movies?.currentPage || 1}
                />
            </>
        )
    }

    return (
        <Container>
            {content}
        </Container>
    );
};

export default MoviesList;