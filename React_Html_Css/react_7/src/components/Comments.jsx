import React, { Component } from 'react';
import { comments as commentsData } from '../constants/data';
import CommentDetails from './CommentDetails';
import './styles/Comments.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData,
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

  deleteComment = (id) => {
    this.setState((prevState) => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }));
  };

  render() {
    return (
      <div className="comments">
        <h3>Коментарі</h3>
        {this.state.comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <p>{comment.text}</p>
            <button onClick={() => this.toggleDetails(comment.id)}>
              {this.state.showDetails[comment.id] ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={() => this.deleteComment(comment.id)}>Delete</button>
            {this.state.showDetails[comment.id] && (
              <CommentDetails comment={comment} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
