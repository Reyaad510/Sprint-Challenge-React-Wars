import React from 'react';
import './StarWars.css';

const Form = props => {
    return (
        <div className="flex">
        <form>
            <input 
            name="name"
            value=''
            placeholder="Name" 
            />
             <input 
            name="gender"
            value=''
            placeholder="Gender" 
            />
             <input 
            name="height"
            value=''
            placeholder="Height" 
            />
             <input 
            name="skincolor"
            value=''
            placeholder="Skin Color" 
            />
             <input 
            name="haircolor"
            value=''
            placeholder="Hair Color" 
            />
            <button type='submit'>Add Character</button>
        </form>
        </div>
    );
}

export default Form;