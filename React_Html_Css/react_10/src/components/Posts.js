import React, { useState } from 'react';
import { useFetchList } from '../hooks/useFetchList';
import { getPosts, getPostById } from '../api/postsApi';

export default function Posts() {
  const { data: posts, loading } = useFetchList(getPosts);
  const [details, setDetails] = useState({});

  const toggleDetails = async (id) => {
    if (details[id]) {
      setDetails((prev) => ({ ...prev, [id]: null }));
    } else {
      const res = await getPostById(id);
      setDetails((prev) => ({ ...prev, [id]: res.data }));
    }
  };

  if (loading) return <p>Loading Posts...</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>{' '}
            <button onClick={() => toggleDetails(post.id)}>
              {details[post.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {details[post.id] && (
              <div>
                <p><strong>Body:</strong> {details[post.id]?.body}</p>
                <p><strong>User ID:</strong> {details[post.id]?.userId}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
