import React, { Component } from 'react';

class Content1 extends Component {
  constructor(props) {
    super(props);
    // Инициализация состояния
    this.state = {
      message: 'Вітаємо! Запуск відліку...',
      timer: 10,
    };
  }

  componentDidMount() {
    // Запуск отсекающего таймера, уменьшающего значение timer каждую секунду
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer > 0 ? prevState.timer - 1 : 0,
      }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Обновляем компонент только при изменении timer
    return nextState.timer !== this.state.timer;
  }

  componentDidUpdate(prevProps, prevState) {
    // Когда timer достигает 0, обновляем сообщение
    if (
      prevState.timer !== 0 &&
      this.state.timer === 0 &&
      this.state.message !== "Час вичерпано!"
    ) {
      this.setState({
        message: "Час вичерпано!",
      });
    }
  }

  componentWillUnmount() {
    // Очистка интервала при размонтировании
    clearInterval(this.interval);
  }

  render() {
    const { message, timer } = this.state;
    return (
      <div className="content">
        <h3>{message}</h3>
        <p>Відлік: {timer}</p>
      </div>
    );
  }
}

export default Content1;
