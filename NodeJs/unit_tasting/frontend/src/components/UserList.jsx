import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = async () => {
    setError('');
    if (!name.trim()) {
      setError('Ім’я не може бути порожнім');
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });

    if (res.ok) {
      const newUser = await res.json();
      setUsers([...users, newUser]);
      setName('');
    } else {
      const err = await res.text();
      setError(err);
    }
  };

  return (
    <div>
      <h1>Користувачі</h1>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <ul data-testid="user-list">
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <input
        placeholder="Введіть ім’я"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Додати</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
