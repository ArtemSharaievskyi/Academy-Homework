import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getComments() {
  return axios.get(`${BASE_URL}/comments`);
}

export function getCommentById(id) {
  return axios.get(`${BASE_URL}/comments/${id}`);
}
