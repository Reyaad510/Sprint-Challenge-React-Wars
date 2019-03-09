import React from 'react';
import './StarWars.css';

const Form = props => {
    return (
        <div className="flex">
        <form onSubmit={props.formSubmitHandler}>
            <input 
            name="name"
            value={props.name}
            placeholder="Name" 
            onChange={props.inputChangeHandler}
            />
             <input 
            name="gender"
            value={props.gender}
            placeholder="Gender" 
            onChange={props.inputChangeHandler}
            />
             <input 
            name="height"
            value={props.height}
            placeholder="Height" 
            onChange={props.inputChangeHandler}
            />
             <input 
            name="skinColor"
            value={props.skinColor}
            placeholder="Skin Color" 
            onChange={props.inputChangeHandler}
            />
             <input 
            name="hairColor"
            value={props.hairColor}
            placeholder="Hair Color" 
            onChange={props.inputChangeHandler}
            />
            <button type='submit'>Add Character</button>
        </form>
        </div>
    );
}

export default Form;