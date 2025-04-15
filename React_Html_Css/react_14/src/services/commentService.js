import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchComments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const fetchCommentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comment with id ${id}:`, error);
    throw error;
  }
};
