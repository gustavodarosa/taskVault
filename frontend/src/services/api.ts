import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL da API
});

// Adiciona o token JWT no cabeçalho Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (email: string, password: string) =>
  api.post('/auth/register', { email, password });

export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export default api;