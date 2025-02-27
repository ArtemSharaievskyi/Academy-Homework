import React, { Component } from 'react';
import { users as usersData } from '../constants/data';
import UserDetails from './UserDetails';
import './styles/Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersData,
      showDetails: {} // ключ – id користувача, значення – true/false
    };
  }

  toggleDetails = (id) => {
    this.setState((prevState) => ({
      showDetails: {
        ...prevState.showDetails,
        [id]: !prevState.showDetails[id]
      }
    }));
  };

  deleteUser = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter(user => user.id !== id)
    }));
  };

  render() {
    return (
      <div className="users">
        <h3>Користувачі</h3>
        {this.state.users.map(user => (
          <div key={user.id} className="user-item">
            <p>{user.name} - {user.email}</p>
            <button onClick={() => this.toggleDetails(user.id)}>
              {this.state.showDetails[user.id] ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={() => this.deleteUser(user.id)}>Delete</button>
            {this.state.showDetails[user.id] && (
              <UserDetails user={user} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
