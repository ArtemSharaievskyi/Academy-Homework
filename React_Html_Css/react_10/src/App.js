import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import { useToggle } from './hooks/useToggle';

function App() {
  const [showUsers, toggleUsers] = useToggle();
  const [showPosts, togglePosts] = useToggle();
  const [showComments, toggleComments] = useToggle();

  return (
    <div style={{ padding: 20 }}>
      <h1>Data Viewer</h1>

      <button onClick={toggleUsers}>{showUsers ? 'Hide' : 'Show'} Users</button>
      {showUsers && <Users />}

      <button onClick={togglePosts}>{showPosts ? 'Hide' : 'Show'} Posts</button>
      {showPosts && <Posts />}

      <button onClick={toggleComments}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <Comments />}
    </div>
  );
}

export default App;
