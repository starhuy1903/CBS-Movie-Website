import React from 'react';
import Grid from "../Grid";
import Thumb from "../Thumb";
import {useSelector} from "react-redux";

const MoviesList = () => {
    const movies = useSelector(state => state.booking.movies);

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