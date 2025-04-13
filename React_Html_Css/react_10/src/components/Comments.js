import React, { useState } from 'react';
import { useFetchList } from '../hooks/useFetchList';
import { getComments, getCommentById } from '../api/commentsApi';

export default function Comments() {
  const { data: comments, loading } = useFetchList(getComments);
  const [details, setDetails] = useState({});

  const toggleDetails = async (id) => {
    if (details[id]) {
      setDetails((prev) => ({ ...prev, [id]: null }));
    } else {
      const res = await getCommentById(id);
      setDetails((prev) => ({ ...prev, [id]: res.data }));
    }
  };

  if (loading) return <p>Loading Comments...</p>;

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>{' '}
            <button onClick={() => toggleDetails(comment.id)}>
              {details[comment.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {details[comment.id] && (
              <div>
                <p><strong>Email:</strong> {details[comment.id]?.email}</p>
                <p><strong>Body:</strong> {details[comment.id]?.body}</p>
                <p><strong>Post ID:</strong> {details[comment.id]?.postId}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
