import React, { Component } from 'react';
import NavBarButton from './navBarButton';

class NavBarLeft extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selected: 'Home'
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(buttonText) {
    this.setState({
      selected: buttonText,
    });
  }

  render() {
    return (
      <div>
        <ul className="navbar-left-btn-group">
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Home'}
            selected={this.state.selected === 'Home'} />
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Moments'}
            selected={this.state.selected === 'Moments'} />
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Notifications'}
            selected={this.state.selected === 'Notifications'} />
          <NavBarButton
            clickHandler={this.changeSelected}
            text={'Messages'}
            selected={this.state.selected === 'Messages'} />
        </ul>
  </div>
    );
  }
}

export default NavBarLeft;
