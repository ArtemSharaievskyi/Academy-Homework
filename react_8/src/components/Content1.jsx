import React from 'react';

class Content1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 'Initial Content1 Info',
    };
  }

  // Оновлення компоненти лише при зміні info
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.info !== this.state.info;
  }

  componentDidMount() {
    this.setState({ info: 'Content1 Data Loaded' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.info !== this.state.info) {
      const el = document.getElementById('content1-container');
      if (el) {
        el.style.backgroundColor = '#e0ffe0';
      }
    }
  }

  componentWillUnmount() {
    const el = document.getElementById('content1-container');
    if (el) {
      el.style.backgroundColor = '';
    }
  }

  render() {
    return (
      <div
        id="content1-container"
        style={{ border: '1px solid green', padding: '10px', marginBottom: '10px' }}
      >
        <h2>Content1 Component</h2>
        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default Content1;
