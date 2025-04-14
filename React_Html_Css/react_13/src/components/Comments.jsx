
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchComments } from '../services/commentService';
import './styles/Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error("Помилка отримання коментарів:", error);
      }
    };

    getComments();
  }, []);

  return (
    <div className="comments-container">
      <h2>Список коментарів</h2>
      <ul className="comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <div className="comment-body">{comment.body}</div>
            <button 
              className="details-button" 
              onClick={() => navigate(`/comment/${comment.id}`)}
            >
              Деталі
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
