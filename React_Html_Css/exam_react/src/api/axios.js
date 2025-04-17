// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://crudcrud.com/api/2eeaed20b52a45c495e463d060896fab',
  headers: {
    'Content-Type': 'application/json',
  },
});
