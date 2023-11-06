import { styled } from "styled-components";
import React, { useState, useEffect } from 'react';
import { img500x500 } from "../utils/imageLink";


const ContentComponent = styled.div`
display:flex;
flex-direction:column;
padding: 1rem;
width: 17rem;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

const MoviePoster = styled.img`
// object-fit:cover;
height:22rem;
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
    console.log(movie);
    return <ContentComponent>
        <MoviePoster src={`${img500x500}/${movie?.poster_path}`} />
        <MovieTitle>{movie?.title}</MovieTitle>
        <MovieInfo>
            <span>Released:{movie?.release_date}</span>
            <span>Rating:{movie?.vote_average}</span>
        </MovieInfo>
    </ContentComponent>;
}


export default ContentCard;