
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
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="posts-container">
      <h2>Список постів</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            {post.title}
            <button onClick={() => navigate(`/post/${post.id}`)}>
              Деталі
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
