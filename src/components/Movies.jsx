import React, { useState, useEffect } from 'react';
import '../styles/Movies.css'
import axios from 'axios';
import ContentCard from './ContentCard';
import Container from 'react-bootstrap/Container';
import Genres from './Genres';


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    console.log(selectedGenres);

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
        <>
            <Genres genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
            <Container className='fetch-container'>
                {movies?.slice(0, 5).map(movie => (

                    <Container className='content-container m-1 mt-5'>

                        <ContentCard movie={movie} key={movie?.id} />

                    </Container>
                ))}

            </Container>
        </>
    )

}
export default Movies




