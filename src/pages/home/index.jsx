import React, {useCallback, useEffect, useState} from 'react';
import HeroImage from "../../components/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "../../components/MoviesList";
import {Pagination} from "@mui/material";
import Spinner from "../../components/Spinner";
import {
    fetchBannerList,
    fetchMoviesList,
    getMoviesError,
    getMoviesStatus,
} from "../../store/movies/moviesSlice";
import {Container} from "./Home.styles";

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies)
    const moviesStatus = useSelector(getMoviesStatus)
    const error = useSelector(getMoviesError)

    const isLoading = moviesStatus === 'loading';

    const [config, setConfig] = useState({
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
    })

    // console.log(config)

    // console.log(config.currentPage)

    const changeTotalCount = useCallback((total) => {
        setConfig({...config, totalPages: total})
    }, [])

    useEffect(() => {
        dispatch(fetchMoviesList({config, changeTotalCount}));
    }, [config.currentPage, dispatch])

    useEffect(() => {
        if(moviesStatus === 'idle') {
            dispatch(fetchBannerList());
        }
    }, [moviesStatus, dispatch])

    const handleChangePage = (event, page) => {
        setConfig({...config, currentPage: page})
    }

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
                    count={config.totalPages}
                    color="secondary"
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