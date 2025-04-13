import React, { Component } from 'react';
import './styles/PostDetails.css';

class PostDetails extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-details">
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
      </div>
    );
  }
}

export default PostDetails;
