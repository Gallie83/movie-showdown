import React, { useState, useEffect } from 'react';
import '../styles/Movies.css'
import ContentCard from './ContentCard';
import Container from 'react-bootstrap/Container';
import Genres from './Genres';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [randomNumber, setRandomNumber] = useState([]);

    // Genres user chooses to filter by
    // const genreIds = genreID(selectedGenres);

    // FETCH MOVIES
    // const fetchMovies = async () => {
    //     try {
    //         const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US&with_genres=${genreIds}`);
    //         setMovies(data?.data.results);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchMovies();
    // }, [selectedGenres]);


    // Trying to return 5 random movies to display but array returns as empty
    // const handleRandomMovie = () => {
    //     const random = [];
    //     for (let i = 0; i < 5; i++) {
    //         random.push(movies.splice(Math.floor(Math.random() * movies.length), 1))
    //         console.log(random);
    //     }
    //     setRandomMovies(random);
    // }

    // useEffect(() => {
    //     handleRandomMovie();
    // }, []);

    // console.log(movies.length);
    return (
        <div className='d-flex m-2'>
            <Genres
                genres={genres}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                movies={movies}
                setMovies={setMovies}
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
                randomNumber={randomNumber}
                setRandomNumber={setRandomNumber}
            />
            <Container className='fetch-container w-75 float-end'>
                {/* Returns random section of 5 movies and maps to ContentCard */}
                {selectedMovies.map(selectedMovie => (

                    <Container className='content-container m-1'>
                        <ContentCard movie={selectedMovie} key={selectedMovie?.id} />
                    </Container>

                ))}

            </Container>
        </div>
    )
}
export default Movies




