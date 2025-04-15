
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentById } from '../services/commentService';
import './styles/CommentDetail.css';

const CommentDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await fetchCommentById(id);
        setComment(data);
      } catch (error) {
        console.error('Error fetching comment:', error);
      }
    };

    getComment();
  }, [id]);

  if (!comment) return <div>Завантаження...</div>;

  return (
    <div className="comment-detail">
      <h2>Коментар ID: {comment.id}</h2>
      <p>{comment.body}</p>
      <p><strong>Email:</strong> {comment.email}</p>
    </div>
  );
};

export default CommentDetail;
