import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL da API definida no .env
});

export default api;