import React, { Component } from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showContent1: true,
    };
  }

  // Переключатель для отображения Navbar
  toggleNavbar = () => {
    this.setState((prevState) => ({
      showNavbar: !prevState.showNavbar,
    }));
  };

  // Переключатель для отображения Content1
  toggleContent1 = () => {
    this.setState((prevState) => ({
      showContent1: !prevState.showContent1,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Приклад життєвих методів компонент у React</h1>
        <div className="controls">
          <button onClick={this.toggleNavbar}>
            {this.state.showNavbar ? 'Приховати Navbar' : 'Показати Navbar'}
          </button>
          <button onClick={this.toggleContent1}>
            {this.state.showContent1 ? 'Приховати Content1' : 'Показати Content1'}
          </button>
        </div>
        {this.state.showNavbar && <Navbar data="Дані для Navbar" />}
        {this.state.showContent1 && <Content1 />}
      </div>
    );
  }
}

export default Wrapper;
