
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './styles/Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/comments">Comments</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
