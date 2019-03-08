import React from 'react';

import { Button } from '../Button';

export const SearchBar = props => {
  return (
    <form onSubmit={props.onFormSubmit} className="input-group">
      <input onChange={props.onInputChange}/>
      <Button label="Search"/>
    </form>
  )
};