import React, { Component } from 'react';
import './styles/CommentDetails.css';

class CommentDetails extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-details">
        <p>ID: {comment.id}</p>
        <p>Post ID: {comment.postId}</p>
        <p>Comment: {comment.text}</p>
      </div>
    );
  }
}

export default CommentDetails;
