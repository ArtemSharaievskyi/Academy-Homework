
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/commentsSlice';

const CommentsPage = () => {
  const dispatch = useDispatch();
  const { data: comments, loading, error } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="page">
      <h2>Comments</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {comments && comments.map(comment => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong>: {comment.body}</p>
            <p>Email: {comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
