import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Ласкаво просимо!</h1>
      <p>Оберіть сторінку для перегляду:</p>
      <ul className="home-links">
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/comments">Comments</Link></li>
      </ul>
    </div>
  );
};

export default Home;
