import React, {useCallback, useEffect, useState} from 'react';
import HeroImage from "../../components/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieAction} from "../../store/booking/bookingActions";
import './home.scss'
import MoviesList from "../../components/MoviesList";
import {CircularProgress, Pagination} from "@mui/material";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.ui.isLoading)

    const [config, setConfig] = useState({
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
    })

    // console.log(config.currentPage)

    const changeTotalCount = useCallback((total) => {
        // setConfig({...config, totalCount: total})
    }, [])

    const fetchMovies = useCallback(() => {
        // console.log('callAPI')
        dispatch(fetchMovieAction(config, changeTotalCount));
    }, [config, dispatch])

    useEffect(() => {
        fetchMovies();
    }, [config.currentPage, fetchMovies])

    const handleChangePage = (event, page) => {
        setConfig({...config, currentPage: page})
    }

    return (
        <>
            <HeroImage/>

            {isLoading ? (
                <CircularProgress style={{textAlign: "center", marginTop: "20px"}} />
            ) : (
                <>
                    <MoviesList/>
                </>
            )}
            <Pagination
                className="pagination"
                onChange={handleChangePage}
                s
                count={3}
                color="secondary"/>
        </>
    );
};

export default Home;