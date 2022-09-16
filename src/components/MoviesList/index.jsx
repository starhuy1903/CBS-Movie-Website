import React from 'react';
import Grid from "../Grid";
import Thumb from "../Thumb";
import {useSelector} from "react-redux";
import {selectMovieList} from "../../store/movies/moviesSlice";
import {Container} from "./MoviesList.styles";
import Spinner from "../Spinner";

const MoviesList = () => {
    const movies = useSelector(selectMovieList);

    return (
        <Container>
            {movies ? (
                <Grid header="Popular Movies">
                    {movies?.items.map(movie => (
                        <Thumb
                            key={movie.maPhim}
                            image={movie.hinhAnh}
                            movieId={movie.maPhim}
                        />
                    ))}
                </Grid>
            ) : <Spinner />}
        </Container>
    );
};

export default MoviesList;