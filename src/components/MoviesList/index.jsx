import React, {useEffect} from 'react';
import Grid from "../Grid";
import Thumb from "../Thumb";
import {useDispatch, useSelector} from "react-redux";
import {fetchBannerList, selectMovieList} from "../../store/movies/moviesSlice";

const MoviesList = () => {
    const movies = useSelector(selectMovieList);

    return (
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
        </>
    );
};

export default MoviesList;