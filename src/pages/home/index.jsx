import React, {useEffect} from 'react';
import HeroImage from "../../components/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "../../components/MoviesList";
import {Pagination} from "@mui/material";
import Spinner from "../../components/Spinner";
import {
    fetchBannerList,
    fetchMoviesList,
    getMoviesError,
    getMoviesStatus, selectMovieList,
} from "../../store/movies/moviesSlice";
import {Container} from "./Home.styles";
import {useLocation, useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const movies = useSelector(selectMovieList)
    const moviesStatus = useSelector(getMoviesStatus)
    const error = useSelector(getMoviesError)

    const currentPage = new URLSearchParams(location.search).get("page") || 1

    const isLoading = moviesStatus === 'loading';

    const handleChangePage = (event, page) => {
        dispatch(fetchMoviesList(Number(page)))
        navigate(`/?page=${page}`)
    }

    useEffect(() => {
        if(moviesStatus === 'idle') {
            dispatch(fetchBannerList());
        }
    }, [moviesStatus, dispatch])

    useEffect(() => {
        if(!movies || Number(currentPage) !== movies.currentPage) {
            dispatch(fetchMoviesList(currentPage));
        }
    }, [dispatch, currentPage, movies])

    let content;

    if(isLoading)
        content = <Spinner />;
    else if(moviesStatus === 'failed') {
        content = <p>{error}</p>
    } else if(moviesStatus === 'succeeded') {
        content = (
            <>
                <HeroImage />
                <MoviesList />
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

export default Home;