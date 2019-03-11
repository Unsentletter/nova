import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';

import { SearchBar } from './components/SearchBar';
import { MainDisplay } from './components/MainDisplay';
import { SubDisplay } from "./components/SubDisplay";

const apiKey = 'fb1a712a82a2133d66d27b355139f842';
const tempLocation = '37.8267,-122.4233';
const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${tempLocation}`;

class App extends Component {
  constructor(props) {
    super(props, null, null);
    this.state = {
      term: '',
      weather: {}
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ term: '' });
    this.fetchWeatherData(this.state.term);
  };

  fetchWeatherData = (term) => {
    axios.get(url).then(res => {
      console.log("APP", res);
      this.setState({
        weather: res.data.daily
      })
    }, (err) => {
      console.log(err)
    })
  };

  orderDays = () => {
    const dayOfWeek = new Date().getDay();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let reorderedWeekdays = [];

    for(let i = 0; i < weekdays.length; i++) {
      let pointer = (i + dayOfWeek) % weekdays.length;
      reorderedWeekdays.push(weekdays[pointer])
    }

    const currentDay = reorderedWeekdays[0];
    reorderedWeekdays.shift();
    console.log(reorderedWeekdays)

    return {
      currentDay,
      reorderedWeekdays
    }
  };

  onInputChange = event => {
    this.setState({ term: event.target.value })
  };

  render() {
    console.log(this.state.weather)
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange}/>
        <MainDisplay data={this.state}/>
        <div className='ordered-days'>
          {this.orderDays().reorderedWeekdays.map((day, i) => {
            return (
              <div className='day' key={i} >
                <SubDisplay day={day} weather={this.state.weather}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
