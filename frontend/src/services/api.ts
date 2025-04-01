import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL da API definida no .env
});

export const register = (email: string, password: string) =>
  api.post('/auth/register', { email, password });

export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export default api;