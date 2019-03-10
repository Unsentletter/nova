import React from 'react';

export const Button = props => {
  return (
    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => props.onClick(props.label)}>
      {props.label}
    </button>
  )
};