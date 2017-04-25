import React from 'react';


export default (props) => {
  return (
    <li>
      <p>{props.tweetObject.text}</p>
    </li>
  );
};
