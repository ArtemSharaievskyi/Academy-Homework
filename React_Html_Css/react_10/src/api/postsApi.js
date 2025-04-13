import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
  return axios.get(`${BASE_URL}/posts`);
}

export function getPostById(id) {
  return axios.get(`${BASE_URL}/posts/${id}`);
}
