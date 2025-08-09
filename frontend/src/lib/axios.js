/*
import axios from 'axios';


const BASE_URL = import.meta.env.MODE === "development" ? 'http://localhost:5001/api/excuses' : "/api"; // Use environment variable or default to local URL
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

*/

import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" 
  ? '/api/excuses'  // Use proxy in development
  : 'https://excusify-m2ch.onrender.com/api/excuses'; // ✅ Your ACTUAL Render URL

console.log('Axios Base URL:', BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;