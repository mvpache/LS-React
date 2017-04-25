import React from 'react';
import { userData } from './application-data.js';

export default (props) => {
  return (
    <ul className="user-data">
      <img src='https://pbs.twimg.com/profile_images/845313033572270081/7mXto357_400x400.jpg' className="profile-photo" />
      <p className="user-info">{userData.name}</p>
      <p className="user-info">{userData.handle}</p>
      <p className="user-info">{userData.bio}</p>
      <p className="user-info">{userData.location}</p>
      <p className="user-info">{userData.website}</p>
      <p className="user-info">{userData.joined}</p>
      <p className="user-info">{userData.birthday}</p>
    </ul>
  );

};
