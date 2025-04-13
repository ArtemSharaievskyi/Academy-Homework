import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers() {
  return axios.get(`${BASE_URL}/users`);
}

export function getUserById(id) {
  return axios.get(`${BASE_URL}/users/${id}`);
}
