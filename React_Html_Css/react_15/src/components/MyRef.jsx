
import React, { useRef, useState } from 'react';
import axios from 'axios';

const MyRef = () => {
  const inputRef = useRef(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleFetchUser = async () => {
    const id = inputRef.current.value;
    if (!id) {
      setError('Введіть id користувача');
      return;
    }
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
      setError('');
    } catch (err) {
      setUser(null);
      setError('Користувача не знайдено');
      console.error('Помилка при завантаженні користувача:', err);
    }
  };

  return (
    <>
      <h2>MyRef Компонента</h2>
      <input ref={inputRef} type="number" placeholder="Введіть id користувача" />
      <button onClick={handleFetchUser}>Отримати користувача</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
        </div>
      )}
    </>
  );
};

export default MyRef;
