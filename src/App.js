import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';


import { SearchBar } from './components/SearchBar';

const apiKey = 'fb1a712a82a2133d66d27b355139f842';
const tempLocation = '37.8267,-122.4233';
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${tempLocation}`;

class App extends Component {
  constructor(props) {
    super(props, null, null);
    this.state = {
      term: ''
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.fetchWeatherData(this.state.term);
    this.setState({ term: '' })
  };

  fetchWeatherData = (term) => {
    axios.get(url).then(res => {
      console.log(res);
    }, (err) => {
      console.log(err)
    })
  };

  onInputChange = event => {
    this.setState({ term: event.target.value })
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
