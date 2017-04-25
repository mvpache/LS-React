import React, { Component } from 'react';
import NavBar from './navBar.js';
import Banner from './banner.js';
import Body from './body.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Body />
      </div>
    );
  }
}

export default App;
