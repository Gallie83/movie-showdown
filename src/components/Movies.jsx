import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentCard from './ContentCard';
import Container from 'react-bootstrap/Container';


const Movies = () => {

    const [movies, setMovies] = useState([]);

    // FETCH MOVIES
    const fetchMovies = async () => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`);
            setMovies(data?.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);
    // console.log(movies);
    return (
        <div>
            {movies?.map(movie => (
                // <Container fluid>

                <ContentCard movie={movie} key={movie?.id} />

                // </Container>
            ))}
        </div>
    )

}
export default Movies




