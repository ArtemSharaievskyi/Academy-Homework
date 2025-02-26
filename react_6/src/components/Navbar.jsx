import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    // Инициализация состояния
    this.state = {
      title: 'Початковий заголовок Navbar',
      counter: 0,
    };
  }

  componentDidMount() {
    // Запуск таймера – обновление счетчика каждую секунду
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Обновляем компонент только если счетчик кратен 5
    return nextState.counter % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    // Если счетчик кратен 10, обновляем заголовок
    if (
      this.state.counter !== prevState.counter &&
      this.state.counter % 10 === 0 &&
      this.state.title !== `Оновлено на ${this.state.counter}`
    ) {
      this.setState({
        title: `Оновлено на ${this.state.counter}`,
      });
    }
  }

  componentWillUnmount() {
    // Очистка таймера при размонтировании
    clearInterval(this.timer);
  }

  render() {
    const { data } = this.props;
    const { title, counter } = this.state;
    return (
      <nav className="navbar">
        <h2>{title}</h2>
        <p>{data}</p>
        <p>Лічильник: {counter}</p>
      </nav>
    );
  }
}

export default Navbar;
