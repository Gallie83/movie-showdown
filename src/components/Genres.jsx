import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/Genres.css'

const Genres = ({ genres, setGenres, selectedGenres, setSelectedGenres, movies, selectedMovies, setSelectedMovies }) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`
        );
        setGenres(data?.genres);
    };


    useEffect(() => {
        fetchGenres();
    }, []);

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

    const populateSelectedMovies = function () {
        const output = [];
        movies.splice(Math.floor(Math.random() * movies.length), 5).map(movie => {
            // setSelectedMovies([...selectedMovies, movie])
            output.push(movie);
        })
        setSelectedMovies(output);
        console.log(selectedMovies);
    }

    return (
        <>
            {selectedGenres?.map(genre => (
                <button onClick={() => removeGenres(genre)} key={genre?.id} className="button bg-warning text-danger">{genre?.name} </button>
            ))}
            {genres?.map(genre => (
                <button onClick={() => addGenres(genre)} key={genre?.id} className="button bg-danger">{genre?.name} </button>
            ))}
            <button onClick={() => populateSelectedMovies()} disabled={!selectedGenres?.length}>Showdown</button>
        </>
    )
}

export default Genres