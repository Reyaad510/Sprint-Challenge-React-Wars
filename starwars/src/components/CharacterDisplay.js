import React from 'react';
import './StarWars.css';

const CharacterDisplay = props => {
    return (
        <div className="character-card">
        <h3>{props.starWars.name}</h3>
        <p><strong>Skin Color: {props.starWars.skin_color}</strong></p>
        </div>
    );
}

export default CharacterDisplay;