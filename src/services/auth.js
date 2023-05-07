import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Set this in your .env file
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
