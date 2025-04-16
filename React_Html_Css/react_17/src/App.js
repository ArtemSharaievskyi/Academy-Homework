import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
