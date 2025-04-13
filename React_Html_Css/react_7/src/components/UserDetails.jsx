import React, { Component } from 'react';
import './styles/UserDetails.css';

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user-details">
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

export default UserDetails;
