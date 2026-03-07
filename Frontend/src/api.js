import axios from 'axios';

const API = axios.create({
  // This automatically uses your deployed backend URL in production
  // or localhost during development
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

export default API;