import React, { Component } from 'react';
import { posts as postsData } from '../constants/data';
import PostDetails from './PostDetails';
import './styles/Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: postsData,
      showDetails: {}
    };
  }

  toggleDetails = (id) => {
    this.setState((prevState) => ({
      showDetails: {
        ...prevState.showDetails,
        [id]: !prevState.showDetails[id]
      }
    }));
  };

  deletePost = (id) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }));
  };

  render() {
    return (
      <div className="posts">
        <h3>Пости</h3>
        {this.state.posts.map(post => (
          <div key={post.id} className="post-item">
            <p>{post.title}</p>
            <button onClick={() => this.toggleDetails(post.id)}>
              {this.state.showDetails[post.id] ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={() => this.deletePost(post.id)}>Delete</button>
            {this.state.showDetails[post.id] && (
              <PostDetails post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
