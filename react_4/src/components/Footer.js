import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default Footer;