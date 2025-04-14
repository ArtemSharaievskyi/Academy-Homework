import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/users">Users</NavLink>
      <NavLink className="nav-link" to="/posts">Posts</NavLink>
      <NavLink className="nav-link" to="/comments">Comments</NavLink>
      <NavLink className="nav-link" to="/forms">Forms</NavLink>
    </nav>
  );
};

export default Navigation;
