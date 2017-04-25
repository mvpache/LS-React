import React from 'react';
import Profile from './profile';
import Stream from './stream'
export default (props) => {
  return (
    <div className="body">
      <Profile />
      <Stream />
    </div>
  );
};
