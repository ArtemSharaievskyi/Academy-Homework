import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Вітаємо на нашому сайті!</h1>
      <p>Оберіть одну з опцій нижче:</p>
      <ul className="home-links">
        <li><Link to="/users">Користувачі</Link></li>
        <li><Link to="/posts">Пости</Link></li>
        <li><Link to="/comments">Коментарі</Link></li>
        <li><Link to="/forms">Форма</Link></li>
      </ul>
    </div>
  );
};

export default Home;
