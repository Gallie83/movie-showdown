import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/MovieBoard.css';
import image from "../assets/movie-board.jpg"
import Movies from '../components/Movies';



function MovieBoard() {

    return (
        <Container className='movie-board p-5 m-5'>
            <Movies></Movies>
            {/* hello */}
        </Container>
    );
}

export default MovieBoard