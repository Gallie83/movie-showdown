import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Genres = ({ genres, setGenres }) => {
    console.log(genres);
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`
        );
        setGenres(data?.genres);
    };

    useEffect(() => {
        fetchGenres();

    }, []);

    return (
        <div>Genres</div>
    )
}

export default Genres