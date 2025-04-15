import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/userService';
import './styles/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>Список користувачів</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="user-item">
            {user.name}
            {/* Навігація через useNavigate із передачею state */}
            <button onClick={() => navigate(`/user/${user.id}`, { state: user })}>
              Деталі
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
