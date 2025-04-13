import React, { useState } from 'react';
import { useFetchList } from '../hooks/useFetchList';
import { getUsers, getUserById } from '../api/usersApi';

export default function Users() {
  const { data: users, loading } = useFetchList(getUsers);
  const [details, setDetails] = useState({});

  const toggleDetails = async (id) => {
    if (details[id]) {
      setDetails(prev => ({ ...prev, [id]: null }));
    } else {
      const res = await getUserById(id);
      setDetails(prev => ({ ...prev, [id]: res.data }));
    }
  };

  if (loading) return <p>Loading Users...</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>{' '}
            <button onClick={() => toggleDetails(user.id)}>
              {details[user.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {details[user.id] && (
              <div>
                <p>Email: {details[user.id]?.email}</p>
                <p>Phone: {details[user.id]?.phone}</p>
                <p>Website: {details[user.id]?.website}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
