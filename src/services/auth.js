// service/auth.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
