import React from 'react';
import CharacterDisplay from './CharacterDisplay';

const CharacterList = props => {
    return (
        <div>
        {props.starWarsData.map(starWars => {
            return <CharacterDisplay starWars={starWars} />
        })}
        </div>
    );
}

export default CharacterList;