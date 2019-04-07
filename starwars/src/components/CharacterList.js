import React from 'react';
import CharacterDisplay from './CharacterDisplay';

const CharacterList = props => {
    return (
        <div className="character-list">
        {props.starWarsData.map(starWars => {
            return <CharacterDisplay starWars={starWars} key={starWars.name} />
        })}
        </div>
    );
}

export default CharacterList;