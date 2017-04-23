import React from 'react';
import { NavBarIcon, NavBarLeft, NavBarRight } from './navBar/';

export default (props) => {
  return (
    <div className="navBar">
      <NavBarLeft />
      <NavBarIcon />
      <NavBarRight />
    </div>
  );
};
