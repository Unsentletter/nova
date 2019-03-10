import React from 'react';

export const WeatherPicture = props => {
  return (
    <div>{getPicture(props.weather)}</div>
  )
};

const getPicture= (weather) => {
  switch(weather) {
    case 'rain':
      return <img src={process.env.PUBLIC_URL + '/rain.jpg'} alt='Rain'/>;
    case 'clear-day':
      return <img src={process.env.PUBLIC_URL + "/sun.png"} alt="Clear day"/>;
    case 'cloudy':
      return <img src={process.env.PUBLIC_URL + "/cloud.png"} alt="Cloudy"/>;
    default:
      return <div>The appropriate image failed to load</div>
  }
};