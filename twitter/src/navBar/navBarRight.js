import React, { Component } from 'react';
import NavBarButton from './navBarButton.js'

class NavBarRight extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selected: 'Home'
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(buttonText) {
    this.setState({
      selected: buttonText
    });
  }

  render() {
    return (
      <div>
        <ul className="navbar-right-btn-group">
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Search'}
            selected={this.state.selected === 'Search'} />
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Profile'}
            selected={this.state.selected === 'Profile'} />
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Write Tweet'}
            selected={this.state.selected === 'Write Tweet'} />
      </ul>
</div>
    );
  }
}

export default NavBarRight
