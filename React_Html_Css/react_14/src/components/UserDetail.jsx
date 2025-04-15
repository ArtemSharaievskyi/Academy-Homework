
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/UserDetail.css';

const UserDetail = () => {
  const location = useLocation();
  const user = location.state;

  if (!user) {
    return <div>Немає даних про користувача. Перейдіть до сторінки "Users" та оберіть користувача.</div>;
  }

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Веб-сайт:</strong> {user.website}</p>
    </div>
  );
};

export default UserDetail;
