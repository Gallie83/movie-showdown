import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    // FETCH MOVIES
    const fetchMovies = async () => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_KEY}&language=en-US`);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movies</h1>
        </div>
    )

}
export default Movies




