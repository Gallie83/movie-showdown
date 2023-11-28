import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/MovieBoard.css';
import Movies from '../components/Movies';



function MovieBoard() {

    return (
        <>
            <Container className='movie-board p-5 mx-auto mt-2'>
                <Movies></Movies>
            </Container>
        </>
    );
}

export default MovieBoard