import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/Genres.css'
import genreID from '../utils/genreID';

const Genres = ({ genres, setGenres, selectedGenres, setSelectedGenres, movies, setMovies, selectedMovies, setSelectedMovies, randomNumber, setRandomNumber }) => {

    // Returns all available genres from API
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`
        );
        setGenres(data?.genres);
    };

    // Adds users genre choices to filter
    const addGenres = genre => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres?.filter(g => g?.id !== genre?.id));
    }

    // Removes users genre choices from filter
    const removeGenres = genre => {
        setSelectedGenres(selectedGenres?.filter(selected => selected?.id !== genre?.id));
        setGenres([...genres, genre])
    }

    // Random number to be used for API page search
    const randomNum = function () {
        const random = [];
        random.push(Math.floor(Math.random() * 100))
        setRandomNumber(random);
    }

    // Get request to API for movies with selected genre
    const fetchMovies = async () => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US&with_genres=${genreID(selectedGenres)}&page=${randomNumber}`);
            setMovies(data?.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    // Stores 5 random movies from the fetchMovies request in array and sets them as seletedMovies
    const populateSelectedMovies = function () {
        console.log(movies);

        const output = [];
        movies.splice(Math.floor(Math.random() * movies.length), 5).map(movie => {
            // setSelectedMovies([...selectedMovies, movie])
            output.push(movie);
        })
        setSelectedMovies(output);
        console.log(selectedMovies);
    }

    useEffect(() => {
        fetchGenres();
        randomNum();
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [selectedGenres])

    // Button clicked to generate random movies 
    const runShowdown = async () => {
        randomNum();
        await fetchMovies();
        populateSelectedMovies();
        // if (selectedMovies.length < 5) {
        //     randomNum();
        //     fetchMovies();
        //     populateSelectedMovies();
        //     console.log('check')
        // }
    }

    return (
        <>
            {selectedGenres?.map(genre => (
                <button onClick={() => removeGenres(genre)} className="button bg-warning text-danger">{genre?.name} </button>
            ))}
            {genres?.map(genre => (
                <button onClick={() => addGenres(genre)} className="button bg-danger">{genre?.name} </button>
            ))}
            <button onClick={() => runShowdown()} disabled={!selectedGenres?.length}>Showdown</button>
        </>
    )
}

export default Genres