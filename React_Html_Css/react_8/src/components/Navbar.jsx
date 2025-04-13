import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial Navbar Data',
      counter: 0,
    };
  }

  // Рендеримо компоненту лише якщо лічильник парний або змінились дані
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter % 2 === 0 || nextState.data !== this.state.data;
  }

  componentDidMount() {
    this.setState({ data: 'Navbar Data Loaded' });
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      document.title = `Navbar Counter: ${this.state.counter}`;
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <nav style={{ border: '1px solid blue', padding: '10px', marginBottom: '10px' }}>
        <h2>Navbar Component</h2>
        <p>{this.state.data}</p>
        <p>Counter: {this.state.counter}</p>
      </nav>
    );
  }
}

export default Navbar;
