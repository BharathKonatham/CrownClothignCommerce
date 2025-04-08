// axiosInstance.js
import axios from 'axios';

// Create instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // or from Redux
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized (token expired)
      console.warn('Token expired or invalid');
      // Redirect to login, or refresh token
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
