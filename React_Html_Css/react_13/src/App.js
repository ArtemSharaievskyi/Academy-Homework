import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Forms from './components/Forms';
import UserDetail from './components/UserDetail';
import PostDetail from './components/PostDetail';
import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Навігаційне меню */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/comment/:id" element={<CommentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
