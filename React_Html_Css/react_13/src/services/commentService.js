import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchComments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    return response.data;
  } catch (error) {
    console.error('Помилка отримання коментарів:', error);
    throw error;
  }
};

export const fetchCommentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Помилка отримання коментаря з id ${id}:`, error);
    throw error;
  }
};
