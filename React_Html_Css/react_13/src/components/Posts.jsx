
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../services/postService';
import './styles/Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Ошибка получения постов:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="posts-container">
      <h2>Список постов</h2>
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <div className="post-title">{post.title}</div>
            <button className="details-button" onClick={() => navigate(`/post/${post.id}`)}>
              Детали
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
