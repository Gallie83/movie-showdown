import { styled } from "styled-components";
import React from 'react';
import { img500x500 } from "../utils/imageLink";

const MoviePoster = styled.img`
height:18rem;
`;

const MovieTitle = styled.span`
font-size: 1.2rem;
font-weight: 600;
margin: 1rem 0;

// Prevent long titles from overflowing
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

const MovieInfo = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
font-size: 1rem;
`;

function ContentCard({ movie }) {
    return <>
        <MoviePoster src={`${img500x500}/${movie?.poster_path}`} />
        <MovieTitle>{movie?.title}</MovieTitle>
        <MovieInfo>
            <span>Released:{movie?.release_date}</span>
            <span>Rating:{movie?.vote_average}</span>
        </MovieInfo>
    </>;
}


export default ContentCard;