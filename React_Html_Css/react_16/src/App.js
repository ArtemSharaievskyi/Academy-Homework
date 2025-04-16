import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByTen,
  decrementByTen,
  divideByTwo,
  setToZero,
  setToHundred,
} from './redux/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(incrementByTen())}>+10</button>
        <button onClick={() => dispatch(decrementByTen())}>-10</button>
        <button onClick={() => dispatch(divideByTwo())}>/2</button>
        <button onClick={() => dispatch(setToZero())}>Set 0</button>
        <button onClick={() => dispatch(setToHundred())}>Set 100</button>
      </div>
    </>
  );
}

export default App;
