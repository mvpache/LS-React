import React from 'react';

export default (props) => {
  const classString = `${ props.selected ? 'selected' : '' }`;
  return (
    <li onClick={() => props.clickHandler(props.text)} className={classString} >{props.text}</li>
  );
};
