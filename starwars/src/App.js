import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      name: '',
      gender: '',
      height: '',
      skin_color: '',
      hair_color: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  formSubmitHandler= event => {
    event.preventDefault();
    let newCharacter = {
      name: this.state.name,
      gender: this.state.gender,
      height: this.state.height,
      skin_color: this.state.skin_color,
      hair_color: this.state.hair_color
    };
    this.setState(prevState => {
      return {
        starwarsChars: [...prevState.starwarsChars, newCharacter],
        name:'',
        gender: '',
        height: '',
        skin_color: '',
        hair_color: ''
      };
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Form 
        inputChangeHandler={this.inputChangeHandler}
        name={this.state.name}
        gender={this.state.gender}
        height={this.state.height}
        skin_color={this.state.skin_color}
        hair_color={this.state.hair_color}
        formSubmitHandler={this.formSubmitHandler}
         />
        <CharacterList starWarsData={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
