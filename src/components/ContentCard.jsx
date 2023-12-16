import React, { useEffect, useState } from 'react';
import { img500x500 } from "../utils/imageLink";
import '../styles/ContentCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ContentCard = ({ movie, showdownResult, setShowdownResult }) => {
    // Stores users movie choice
    const [userChoices, setUserChoices] = useState([]);


    // useEffect(() => {
    //     if (userChoices.length > 1) {
    //         console.log(userChoices)
    //         const selectedObject = userChoices[userChoices.length - 1];
    //         const previousObject = userChoices[userChoices.length - 2];
    //         if (selectedObject === previousObject) {
    //             console.log('W');
    //             console.log(userChoices);

    //             setShowdownResult('W')
    //         } else {
    //             console.log('L');
    //             setShowdownResult('L')
    //             console.log(userChoices);
    //         }
    //     }
    //     // Update the previous state reference
    //     prevUserChoicesRef.current = userChoices;
    // }, [userChoices]);

    const handleObjectSelect = (selectedObject) => {
        if (userChoices.length > 0 && selectedObject !== userChoices[0]) {
            console.log('L');
            setShowdownResult('L')
            console.log(userChoices);
        } else if (userChoices.length > 0 && selectedObject === userChoices[0]) {
            // Checks if movie choices were a match
            setUserChoices((prevChoices) => [...prevChoices, selectedObject]);
            console.log('W')
            console.log(userChoices)
        }
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