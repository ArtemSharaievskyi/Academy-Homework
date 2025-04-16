import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByTen: state => { state.value += 10 },
    decrementByTen: state => { state.value -= 10 },
    divideByTwo: state => { state.value = Math.round(state.value / 2) },
    setToZero: state => { state.value = 0 },
    setToHundred: state => { state.value = 100 },
  },
});

export const {
  increment,
  decrement,
  incrementByTen,
  decrementByTen,
  divideByTwo,
  setToZero,
  setToHundred,
} = counterSlice.actions;

export default counterSlice.reducer;
