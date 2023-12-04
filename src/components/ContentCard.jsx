import { styled } from "styled-components";
import React from 'react';
import { img500x500 } from "../utils/imageLink";
import '../styles/ContentCard.css'


function ContentCard({ movie }) {
    return <div className="content-card mx-auto">
        <img className="movie-poster" src={`${img500x500}/${movie?.poster_path}`} />
        <div className="movie-title mx-auto">{movie?.title}</div>
        <div className="movie-info">
            <span>Released:{movie?.release_date}</span>
            <span>Rating:{movie?.vote_average}</span>
        </div>
    </div>;
}

export default ContentCard;