import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="count-component">
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.increment}>Збільшити</button>
        <button onClick={this.decrement}>Зменшити</button>
      </div>
    );
  }
}
export default Count;