import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const API = import.meta.env.VITE_API_URL;

export const fetchPhrases = createAsyncThunk('phrases/fetch', async (query = '') => {
  const res = await axios.get(`${API}/phrases?search=${query}`);
  return res.data;
});

export const addPhrase = createAsyncThunk('phrases/add', async (phrase) => {
  const res = await axios.post(`${API}/phrases`, phrase);
  return res.data;
});

export const deletePhrase = createAsyncThunk('phrases/delete', async (id) => {
  await axios.delete(`${API}/phrases/${id}`);
  return id;
});

export const markLearned = createAsyncThunk('phrases/learn', async (id) => {
  const res = await axios.put(`${API}/phrases/${id}`);
  return res.data;
});

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: {
    items: JSON.parse(localStorage.getItem('phrases')) || [],
    status: 'idle',
    error: null,
    theme: localStorage.getItem('theme') || 'light',
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhrases.fulfilled, (state, action) => {
        state.items = action.payload;
        localStorage.setItem('phrases', JSON.stringify(state.items));
      })
      .addCase(addPhrase.fulfilled, (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem('phrases', JSON.stringify(state.items));
      })
      .addCase(deletePhrase.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
        localStorage.setItem('phrases', JSON.stringify(state.items));
      })
      .addCase(markLearned.fulfilled, (state, action) => {
        const idx = state.items.findIndex(p => p.id === action.payload.id);
        if (idx >= 0) state.items[idx] = action.payload;
        localStorage.setItem('phrases', JSON.stringify(state.items));
      });
  },
});

export const { toggleTheme } = phrasesSlice.actions;
export default phrasesSlice.reducer;