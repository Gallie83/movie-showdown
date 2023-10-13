import { styled } from "styled-components";
import React, { useState, useEffect } from 'react';


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

function ContentCard() {
    return <ContentComponent>
        <MoviePoster src="https://m.media-amazon.com/images/M/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ@@._V1_SX300.jpg" />
        <MovieTitle>Title Here</MovieTitle>
        <MovieInfo>
            <span>Released:</span>
            <span>Type:</span>
        </MovieInfo>
    </ContentComponent>;
}


export default ContentCard;