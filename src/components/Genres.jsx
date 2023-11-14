import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/Genres.css'
import Button from 'react-bootstrap/Button';


const Genres = ({ genres, setGenres }) => {
    console.log(genres);
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`
        );
        setGenres(data?.genres);
    };

    useEffect(() => {
        fetchGenres();

    }, []);

    return (
        <>
            {genres?.map(genre => (
                <button class="button">{genre?.name}</button>
            ))}
        </>
    )
}

export default Genres