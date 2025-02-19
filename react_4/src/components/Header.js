import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default Header;