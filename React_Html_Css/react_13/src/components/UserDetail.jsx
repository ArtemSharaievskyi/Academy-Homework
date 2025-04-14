import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../services/userService';
import './styles/UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [id]);

  if (!user) return <div>Завантаження...</div>;

  return (
    <div className="user-detail">
      <h2>Деталі користувача {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Вебсайт:</strong> {user.website}</p>
      {/* Додаткові деталі */}
    </div>
  );
};

export default UserDetail;
