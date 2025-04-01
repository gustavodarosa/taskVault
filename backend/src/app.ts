// filepath: backend/src/app.ts
import express from 'express';
import cors from 'cors'; // Importa o middleware CORS

import taskRoutes from './api/routes/taskRoutes';
import authRoutes from './api/routes/authRoutes';
import { errorHandler } from './api/middlewares/errorHandler';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Permite requisições apenas do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Permite envio de cookies, se necessário
  }));

app.use(express.json());

app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;