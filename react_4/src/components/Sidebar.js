import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-component">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

export default Sidebar;