import { styled } from "styled-components";
import React from 'react';
import { img500x500 } from "../utils/imageLink";
import '../styles/ContentCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'



function ContentCard({ movie }) {
    return <div className="content-card">
        <img className="movie-poster" src={`${img500x500}/${movie?.poster_path}`} />
        <div className="movie-title">{movie?.title}</div>
        <div className="movie-info">
            <span>{movie?.release_date}</span>
            <span><FontAwesomeIcon icon={faStar} />{movie?.vote_average}</span>
        </div>
    </div>;
}

export default ContentCard;