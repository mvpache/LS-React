import React, { Component } from 'react';

class stream extends Component {
  render() {
    return (
      <div>
        <h1>Tweets?</h1>
        <ul>
          {this.props.tweets.map((tweets) => {
            return (
              <li>
                <h3>{tweets.text}</h3>
                </li>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default stream;
