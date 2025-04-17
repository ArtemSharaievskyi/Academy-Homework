// src/redux/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';

// Thunks
export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async () => {
    const response = await axios.get('/expenses');
    // crudcrud returns an array of objects with `_id`
    return response.data;
  }
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expense) => {
    // POST the new expense; crudcrud will assign `_id`
    const response = await axios.post('/expenses', expense);
    return response.data;
  }
);

export const editExpense = createAsyncThunk(
  'expenses/editExpense',
  async (expense) => {
    const { _id, ...rest } = expense;
    // PUT to /expenses/:_id
    await axios.put(`/expenses/${_id}`, { ...rest, _id });
    // Return the full updated object
    return expense;
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (_id) => {
    await axios.delete(`/expenses/${_id}`);
    return _id;
  }
);

// Slice
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    items: [],      // array of { _id, title, amount, category, date }
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // (optional) you can place sync reducers here
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchExpenses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // ADD
      .addCase(addExpense.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // EDIT
      .addCase(editExpense.fulfilled, (state, action) => {
        const idx = state.items.findIndex(e => e._id === action.payload._id);
        if (idx !== -1) {
          state.items[idx] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.items = state.items.filter(e => e._id !== action.payload);
      });
  },
});

export default expenseSlice.reducer;
