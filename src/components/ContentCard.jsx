import { styled } from "styled-components";
import React, { useEffect, useState } from 'react';
import { img500x500 } from "../utils/imageLink";
import '../styles/ContentCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ContentCard = ({ movie, showdownResult, setShowdownResult }) => {

    // const [movieOne, setMovieOne] = useState([]);
    // const [movieTwo, setMovieTwo] = useState([]);

    // const assignMovieOne = async movie => {
    //     let pick = [movie?.id];
    //     setMovieOne(pick);
    //     console.log(movieOne);
    // }

    // const assignMovie = movie => {
    //     let pick = [movie?.id];
    //     setMovieOne(pick);
    //     console.log(movieOne);
    // }

    // Stores users movie choice
    const [userChoices, setUserChoices] = useState([]);


    useEffect(() => {
        if (userChoices.length === 2) {
            console.log("userChoices in useEffect:", userChoices);

            if (userChoices[0] === userChoices[1]) {
                console.log('W');
            } else {
                console.log('L');
            }
            // Reset choices after comparison
            setUserChoices([]);
        }
    }, [userChoices]);

    const handleObjectSelect = (selectedObject) => {
        // Checks if movie choices were a match
        if (userChoices.includes(selectedObject)) {
            console.log("Duplicate choice:", selectedObject);
            return;
        }

        // Update choices
        const updatedChoices = [...userChoices, selectedObject].slice(-2);
        console.log("Updated choices:", updatedChoices);
        setUserChoices(updatedChoices);
    };



    return <div className="content-card" onClick={() => handleObjectSelect(movie?.title)}>
        <img className="movie-poster img-fluid" src={`${img500x500}/${movie?.poster_path}`} />
        <div className="movie-title">{movie?.title}</div>
        <div className="movie-info">
            <span>{movie?.release_date}</span>
            <span><FontAwesomeIcon icon={faStar} />{movie?.vote_average}</span>
        </div>
    </div>;

}

export default ContentCard;