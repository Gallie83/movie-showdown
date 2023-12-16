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
    const [showdownResult, setShowdownResult] = useState([]);

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
                        <ContentCard
                            movie={selectedMovie}
                            showdownResult={showdownResult}
                            setShowdownResult={setShowdownResult}
                            key={selectedMovie?.id} />
                    </Container>

                ))}

            </Container>
        </div>
    )
}
export default Movies




