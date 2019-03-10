import React, { Component } from 'react';

import { WeatherPicture } from '../WeatherPicture';

export class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "No weather data received"
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ weather: this.props.data.weather})
    }
  }

  render() {
    return (
      <div><WeatherPicture weather={this.state.weather.icon}/></div>
    )
  }
}