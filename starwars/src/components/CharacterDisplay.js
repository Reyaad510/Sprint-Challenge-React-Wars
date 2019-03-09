import React from 'react';
import './StarWars.css';

const CharacterDisplay = props => {
    return (
        <div className="character-card">
        <h3>{props.starWars.name}</h3>
        <p><strong>Gender:</strong> {props.starWars.gender}</p>
        <p><strong>Height:</strong> {props.starWars.height}</p>
        <p><strong>Skin Color:</strong> {props.starWars.skin_color}</p>
        <p><strong>Hair Color:</strong> {props.starWars.hair_color}</p>
        </div>
    );
}

export default CharacterDisplay;