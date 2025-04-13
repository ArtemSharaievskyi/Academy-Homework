import React, { Component } from 'react';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import './styles/Content.css';

class Content extends Component {
  render() {
    return (
      <main>
        <h2>Контент</h2>
        <Users />
        <Posts />
        <Comments />
      </main>
    );
  }
}

export default Content;
