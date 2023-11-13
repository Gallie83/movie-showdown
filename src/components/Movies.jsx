import React, { useState, useEffect } from 'react';
import '../styles/Movies.css'
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
    return (
        <Container className='fetch-container'>
            {movies?.map(movie => (
                <Container className='content-container'>

                    <ContentCard movie={movie} key={movie?.id} />

                </Container>
            ))}
        </Container>
    )

}
export default Movies




