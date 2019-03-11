import React, { Component } from 'react';

import './index.css';

export class SubDisplay extends Component {

  render() {
    return (
      <div className='sub-display'>
        <div className='title'>
         {this.props.day}
        </div>
        <div className='icon-field'>
          {this.props.weather.icon}
        </div>
      </div>
    )
  }
}